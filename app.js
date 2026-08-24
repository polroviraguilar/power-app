(function () {
  "use strict";

  const STORAGE = {
    plan: "powerApp.weekstack.plan.agost2026.v1",
    donePrefix: "powerApp.weekstack.done.agost2026.v1",
    actualPrefix: "powerApp.weekstack.actual.agost2026.v1",
    theme: "powerApp.weekstack.theme.v2"
  };

const state = {
  view: "daily",
  week: getCurrentWeek(),
  day: getCurrentDay(),
  expandedDay: getCurrentDay(),
  editorWeek: getCurrentWeek(),
  editorDay: "all",
  blueprintDay: getCurrentDay(),
  importOpen: false
};

  const VIEWS = [
    { key: "daily", label: "Daily", title: "Daily" },
    { key: "plan", label: "Plan", title: "General View" },
    { key: "program", label: "Program", title: "Program" },
    { key: "warmup", label: "Warm-up", title: "Warming Up" },
    { key: "mobility", label: "Mobility", title: "Stretching" }
  ];

  let plan = loadPlan();

  document.addEventListener("DOMContentLoaded", () => {
    applyStoredTheme();
    render();
    registerServiceWorker();
  });

  function render() {
    const app = document.getElementById("app");
    if (!app) return;

    const activeView = VIEWS.find(v => v.key === state.view) || VIEWS[0];

    app.innerHTML = `
      <header class="app-header">
        <div class="header-row">
          <div>
            <div class="eyebrow">${escapeHTML(APP_SETTINGS.programName)}</div>
            <h1>${escapeHTML(activeView.title)}</h1>
          </div>
          <button class="theme-toggle" type="button" onclick="toggleTheme()" aria-label="Toggle theme">
            <span></span>
          </button>
        </div>

        <nav class="view-tabs" aria-label="Main navigation">
          ${VIEWS.map(view => `
            <button type="button" class="view-tab ${view.key === state.view ? "active" : ""}" onclick="setView('${view.key}')">
              ${escapeHTML(view.label)}
            </button>
          `).join("")}
        </nav>
      </header>

      <main class="view-shell enter">
        ${renderCurrentView()}
      </main>
    `;
  }

  function renderCurrentView() {
    if (state.view === "daily") return renderDailyView();
    if (state.view === "plan") return renderPlanView();
    if (state.view === "program") return renderBlueprintView("program");
    if (state.view === "warmup") return renderBlueprintView("warmup");
    if (state.view === "mobility") return renderBlueprintView("mobility");
    return renderDailyView();
  }

  function renderDailyView() {
    const selectedDayDef = getDayDef(state.day);
    const selectedSession = getSession(state.day, state.week);

    return `
      <section class="control-strip">
        <label>
          <span>Week</span>
          <select onchange="setWeek(this.value)">
            ${getWeeks().map(w => `<option value="${w}" ${w === state.week ? "selected" : ""}>${w}</option>`).join("")}
          </select>
        </label>

        <label>
          <span>Day</span>
          <select onchange="setDay(this.value)">
            ${APP_DAYS.map(day => `<option value="${escapeAttr(day.key)}" ${day.key === state.day ? "selected" : ""}>${escapeHTML(day.weekDay)}</option>`).join("")}
          </select>
        </label>
      </section>

      <section class="week-stack" aria-label="Week stack">
        ${APP_DAYS.map((dayDef, index) => renderDayBlock(dayDef, index)).join("")}
      </section>
    `;
  }

function renderDayBlock(dayDef, index) {
  const isActive = dayDef.key === state.expandedDay;
  const session = getSession(dayDef.key, state.week);
  const exercises = getExercises(dayDef.key, state.week);
  const completed = getDayCompletion(state.week, dayDef.key);
  const completionCount = countCompleted(completed);
  const totalCount = getTotalItemsForDay(dayDef.key, exercises);
  const blockShade = `style="--shade-index:${index};"`;

  return `
    <article class="day-block ${isActive ? "is-active" : ""}" ${blockShade}>
      <button type="button" class="day-head" onclick="toggleDailyDay('${escapeJS(dayDef.key)}')">
        <span class="day-title">${escapeHTML(dayDef.weekDay)}</span>
        <span class="day-meta">${escapeHTML(dayDef.label)} · ${escapeHTML(dayDef.focus)}</span>
        <span class="day-progress">${completionCount}/${totalCount}</span>
      </button>

      ${isActive ? `
        <div class="day-details">
          ${renderDailySection("Warm up", "warmup", WARMUPS[dayDef.key] || [], dayDef.key)}
          ${renderMainTraining(dayDef.key, session, exercises)}
          ${renderDailySection("Mobility", "mobility", MOBILITY[dayDef.key] || [], dayDef.key)}
        </div>
      ` : ""}
    </article>
  `;
}

  function renderDailySection(title, sectionKey, items, dayKey) {
    return `
      <section class="daily-section">
        <div class="section-heading">
          <h3>${escapeHTML(title)}</h3>
          <span>${items.length} items</span>
        </div>
        <div class="task-list">
          ${items.map((item, index) => renderTaskLine({
            sectionKey,
            dayKey,
            index,
            title: item.title,
            detail: item.detail
          })).join("")}
        </div>
      </section>
    `;
  }

  function renderMainTraining(dayKey, session, exercises) {
    return `
      <section class="daily-section main-training">
        <div class="section-heading">
          <h3>Main training</h3>
          <span>${escapeHTML(session.phase || "")}</span>
        </div>
        <div class="exercise-list">
          ${exercises.map((exercise, index) => renderExerciseLine(dayKey, index, exercise)).join("")}
        </div>
      </section>
    `;
  }

  function renderTaskLine({ sectionKey, dayKey, index, title, detail }) {
    const id = `${sectionKey}_${index}`;
    const done = isDone(state.week, dayKey, id);

    return `
      <button type="button" class="task-line ${done ? "done" : ""}" onclick="toggleDone('${escapeJS(dayKey)}','${escapeJS(id)}')">
        <span class="checkbox"><span></span></span>
        <span class="task-copy">
          <strong>${escapeHTML(title)}</strong>
          <small>${escapeHTML(detail || "")}</small>
        </span>
      </button>
    `;
  }

  function renderExerciseLine(dayKey, index, exercise) {
    const id = `main_${index}`;
    const done = isDone(state.week, dayKey, id);
    const actuals = getActuals(state.week, dayKey);
    const actual = actuals[index] || "";

    return `
      <article class="exercise-line ${done ? "done" : ""}">
        <button type="button" class="exercise-check" onclick="toggleDone('${escapeJS(dayKey)}','${escapeJS(id)}')" aria-label="Mark exercise">
          <span class="checkbox"><span></span></span>
        </button>

        <div class="exercise-main">
          <div class="exercise-title-row">
            <strong>${escapeHTML(exercise.name)}</strong>
            ${exercise.component ? `<em>${escapeHTML(exercise.component)}</em>` : ""}
          </div>
          ${exercise.top ? `<p class="top-line">${escapeHTML(exercise.top)}</p>` : ""}
          ${exercise.work ? `<p>${escapeHTML(exercise.work)}</p>` : ""}
          ${exercise.notes ? `<small>${escapeHTML(exercise.notes)}</small>` : ""}
        </div>

        <label class="actual-input">
          <span>Actual</span>
          <input type="text" inputmode="decimal" value="${escapeAttr(actual)}" placeholder="real" onchange="saveActual('${escapeJS(dayKey)}', ${index}, this.value)">
        </label>
      </article>
    `;
  }

  function renderPlanView() {
    const weeks = getWeeks();
    const daysToShow = state.editorDay === "all" ? APP_DAYS : APP_DAYS.filter(d => d.key === state.editorDay);

    return `
      <section class="control-strip plan-controls">
        <label>
          <span>Week</span>
          <select onchange="setEditorWeek(this.value)">
            ${weeks.map(w => `<option value="${w}" ${w === state.editorWeek ? "selected" : ""}>${w}</option>`).join("")}
          </select>
        </label>

        <label>
          <span>Day</span>
          <select onchange="setEditorDay(this.value)">
            <option value="all" ${state.editorDay === "all" ? "selected" : ""}>All days</option>
            ${APP_DAYS.map(day => `<option value="${escapeAttr(day.key)}" ${day.key === state.editorDay ? "selected" : ""}>${escapeHTML(day.weekDay)}</option>`).join("")}
          </select>
        </label>
      </section>

      <section class="editor-actions">
        <button type="button" onclick="toggleImportPanel()">Import / Export</button>
        <button type="button" onclick="resetPlan()">Reset plan</button>
      </section>

      ${state.importOpen ? renderImportExportPanel() : ""}

      <section class="editor-note">
        <p>All edits are saved locally and reflected in Daily and the other views.</p>
      </section>

      <section class="editor-list">
        ${daysToShow.map(dayDef => renderDayEditor(dayDef, state.editorWeek)).join("")}
      </section>
    `;
  }

  function renderImportExportPanel() {
    return `
      <section class="import-panel">
        <h2>Import / Export</h2>
        <p>Copy this JSON to back up the plan, or paste a previous backup and import it.</p>
        <textarea id="planJson" spellcheck="false">${escapeHTML(JSON.stringify(plan, null, 2))}</textarea>
        <div class="split-actions">
          <button type="button" onclick="copyPlanJson()">Copy JSON</button>
          <button type="button" onclick="importPlanJson()">Import JSON</button>
        </div>
      </section>
    `;
  }

  function renderDayEditor(dayDef, week) {
    const session = getSession(dayDef.key, week);
    const exercises = getExercises(dayDef.key, week);

    return `
      <article class="editor-day">
        <div class="editor-day-head">
          <div>
            <h2>${escapeHTML(dayDef.weekDay)}</h2>
            <p>${escapeHTML(dayDef.label)} · Week ${week}</p>
          </div>
          <button type="button" onclick="addExercise('${escapeJS(dayDef.key)}', ${week})">Add</button>
        </div>

        <label class="field full">
          <span>Phase</span>
          <input type="text" value="${escapeAttr(session.phase || "")}" onchange="updatePhase('${escapeJS(dayDef.key)}', ${week}, this.value)">
        </label>

        ${exercises.map((exercise, index) => renderExerciseEditor(dayDef.key, week, exercise, index)).join("")}
      </article>
    `;
  }

  function renderExerciseEditor(dayKey, week, exercise, index) {
    return `
      <article class="editor-card">
        <div class="editor-card-head">
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <button type="button" onclick="deleteExercise('${escapeJS(dayKey)}', ${week}, ${index})">Delete</button>
        </div>

        <label class="field full">
          <span>Exercise</span>
          <input type="text" value="${escapeAttr(exercise.name || "")}" onchange="updateExercise('${escapeJS(dayKey)}', ${week}, ${index}, 'name', this.value)">
        </label>

        <div class="field-grid">
          <label class="field">
            <span>Component</span>
            <input type="text" value="${escapeAttr(exercise.component || "")}" onchange="updateExercise('${escapeJS(dayKey)}', ${week}, ${index}, 'component', this.value)">
          </label>

          <label class="field">
            <span>Top set</span>
            <input type="text" value="${escapeAttr(exercise.top || "")}" onchange="updateExercise('${escapeJS(dayKey)}', ${week}, ${index}, 'top', this.value)">
          </label>
        </div>

        <label class="field full">
          <span>Work</span>
          <input type="text" value="${escapeAttr(exercise.work || "")}" onchange="updateExercise('${escapeJS(dayKey)}', ${week}, ${index}, 'work', this.value)">
        </label>

        <label class="field full">
          <span>Notes</span>
          <input type="text" value="${escapeAttr(exercise.notes || "")}" onchange="updateExercise('${escapeJS(dayKey)}', ${week}, ${index}, 'notes', this.value)">
        </label>
      </article>
    `;
  }

  function renderBlueprintView(kind) {
    const day = state.blueprintDay;
    const source = kind === "program" ? PROGRAM_BLUEPRINT : kind === "warmup" ? WARMUPS : MOBILITY;
    const title = kind === "program" ? "Blueprint" : kind === "warmup" ? "Warm-up flow" : "Mobility flow";
    const items = source[day] || [];
    const dayDef = getDayDef(day);

    return `
      <section class="control-strip">
        <label>
          <span>Day</span>
          <select onchange="setBlueprintDay(this.value)">
            ${APP_DAYS.map(dayItem => `<option value="${escapeAttr(dayItem.key)}" ${dayItem.key === day ? "selected" : ""}>${escapeHTML(dayItem.weekDay)}</option>`).join("")}
          </select>
        </label>
      </section>

      <section class="blueprint-hero">
        <span>${escapeHTML(dayDef.label)}</span>
        <h2>${escapeHTML(dayDef.weekDay)}</h2>
        <p>${escapeHTML(title)}</p>
      </section>

      <section class="blueprint-list">
        ${items.map((item, index) => `
          <article class="blueprint-item" style="--i:${index}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${escapeHTML(item.title)}</strong>
              <p>${escapeHTML(item.detail)}</p>
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  function loadPlan() {
    const saved = localStorage.getItem(STORAGE.plan);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") return parsed;
      } catch (error) {
        console.warn("Stored plan could not be parsed", error);
      }
    }

    const editable = createEditablePlan(progression);
    savePlan(editable);
    return editable;
  }

  function createEditablePlan(source) {
    const result = {};

    APP_DAYS.forEach(dayDef => {
      result[dayDef.key] = {};

      getWeeks().forEach(week => {
        const original = source[dayDef.key]?.[week] || { phase: "", exercises: {} };
        result[dayDef.key][week] = {
          phase: original.phase || "",
          exercises: Object.entries(original.exercises || {}).map(([name, data]) => ({
            name,
            component: data.component || "",
            top: data.top || "",
            work: data.work || "",
            notes: data.notes || ""
          }))
        };
      });
    });

    return result;
  }

  function savePlan(nextPlan = plan) {
    localStorage.setItem(STORAGE.plan, JSON.stringify(nextPlan));
  }

  function getSession(day, week) {
    return plan?.[day]?.[week] || { phase: "", exercises: [] };
  }

  function getExercises(day, week) {
    const session = getSession(day, week);
    return Array.isArray(session.exercises) ? session.exercises : [];
  }

  function getWeeks() {
    const weeks = [];
    for (let week = APP_SETTINGS.minWeek; week <= APP_SETTINGS.maxWeek; week++) {
      weeks.push(week);
    }
    return weeks;
  }

  function getCurrentWeek() {
    const start = new Date(`${APP_SETTINGS.startDate}T00:00:00`);
    const now = new Date();
    const days = Math.floor((now - start) / 86400000);
    const week = APP_SETTINGS.baseWeek + Math.floor(days / 7);
    return clamp(week, APP_SETTINGS.minWeek, APP_SETTINGS.maxWeek);
  }

  function getCurrentDay() {
    const day = new Date().getDay();
    const map = {
      1: "Upper 1",
      2: "Lower 1",
      3: "Cardio",
      4: "Upper 2",
      5: "Lower 2"
    };
    return map[day] || "Upper 1";
  }

  function getDayDef(key) {
    return APP_DAYS.find(day => day.key === key) || APP_DAYS[0];
  }

  function getDayIndex(dayKey) {
    return Math.max(0, APP_DAYS.findIndex(day => day.key === dayKey));
  }

  function formatSessionDate(week, dayKey) {
    const start = new Date(`${APP_SETTINGS.startDate}T00:00:00`);
    const offsetDays = (week - APP_SETTINGS.baseWeek) * 7 + getDayIndex(dayKey);
    start.setDate(start.getDate() + offsetDays);
    return start.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  function getDoneKey(week, dayKey) {
    return `${STORAGE.donePrefix}.${week}.${slug(dayKey)}`;
  }

  function getActualKey(week, dayKey) {
    return `${STORAGE.actualPrefix}.${week}.${slug(dayKey)}`;
  }

  function getDayCompletion(week, dayKey) {
    try {
      return JSON.parse(localStorage.getItem(getDoneKey(week, dayKey))) || {};
    } catch {
      return {};
    }
  }

  function saveDayCompletion(week, dayKey, data) {
    localStorage.setItem(getDoneKey(week, dayKey), JSON.stringify(data));
  }

  function isDone(week, dayKey, id) {
    return !!getDayCompletion(week, dayKey)[id];
  }

  function countCompleted(completed) {
    return Object.values(completed).filter(Boolean).length;
  }

  function getTotalItemsForDay(dayKey, exercises) {
    return (WARMUPS[dayKey]?.length || 0) + exercises.length + (MOBILITY[dayKey]?.length || 0);
  }

  function getActuals(week, dayKey) {
    try {
      return JSON.parse(localStorage.getItem(getActualKey(week, dayKey))) || {};
    } catch {
      return {};
    }
  }

  function setActuals(week, dayKey, actuals) {
    localStorage.setItem(getActualKey(week, dayKey), JSON.stringify(actuals));
  }

  function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value) {
    return escapeHTML(value);
  }

  function escapeJS(value) {
    return String(value ?? "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  }

  function applyStoredTheme() {
    const stored = localStorage.getItem(STORAGE.theme) || "light";
    document.body.classList.toggle("theme-dark", stored === "dark");
    document.body.classList.toggle("theme-light", stored !== "dark");
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("sw.js").catch(error => console.warn("Service worker error", error));
  }

  window.setView = function (view) {
    state.view = view;
    state.importOpen = false;
    render();
  };

  window.setWeek = function (week) {
    state.week = parseInt(week, 10);
    render();
  };

  window.setDay = function (day) {
    state.day = day;
    state.expandedDay = day;
    state.blueprintDay = day;
    render();
  };  

  window.toggleDailyDay = function (day) {
    if (state.expandedDay === day) {
      state.expandedDay = null;
    } else {
      state.day = day;
      state.expandedDay = day;
      state.blueprintDay = day;
    }

    render();
  };

  window.setEditorWeek = function (week) {
    state.editorWeek = parseInt(week, 10);
    render();
  };

  window.setEditorDay = function (day) {
    state.editorDay = day;
    render();
  };

  window.setBlueprintDay = function (day) {
    state.blueprintDay = day;
    render();
  };

  window.toggleDone = function (dayKey, id) {
    const completed = getDayCompletion(state.week, dayKey);
    completed[id] = !completed[id];
    saveDayCompletion(state.week, dayKey, completed);

    if (navigator.vibrate) navigator.vibrate(18);
    render();
  };

  window.saveActual = function (dayKey, index, value) {
    const actuals = getActuals(state.week, dayKey);
    actuals[index] = value.trim();
    setActuals(state.week, dayKey, actuals);
  };

  window.updatePhase = function (dayKey, week, value) {
    if (!plan[dayKey]) plan[dayKey] = {};
    if (!plan[dayKey][week]) plan[dayKey][week] = { phase: "", exercises: [] };
    plan[dayKey][week].phase = value;
    savePlan();
  };

  window.updateExercise = function (dayKey, week, index, field, value) {
    const exercises = getExercises(dayKey, week);
    if (!exercises[index]) return;
    exercises[index][field] = value;
    savePlan();
  };

  window.addExercise = function (dayKey, week) {
    if (!plan[dayKey]) plan[dayKey] = {};
    if (!plan[dayKey][week]) plan[dayKey][week] = { phase: "", exercises: [] };
    plan[dayKey][week].exercises.push({ name: "New exercise", component: "", top: "", work: "", notes: "" });
    savePlan();
    render();
  };

  window.deleteExercise = function (dayKey, week, index) {
    const exercises = getExercises(dayKey, week);
    exercises.splice(index, 1);
    savePlan();
    render();
  };

  window.resetPlan = function () {
    const confirmed = window.confirm("Reset the whole editable plan to the default version?");
    if (!confirmed) return;
    plan = createEditablePlan(progression);
    savePlan();
    render();
  };

  window.toggleImportPanel = function () {
    state.importOpen = !state.importOpen;
    render();
  };

  window.copyPlanJson = async function () {
    const textarea = document.getElementById("planJson");
    if (!textarea) return;
    textarea.select();
    try {
      await navigator.clipboard.writeText(textarea.value);
    } catch {
      document.execCommand("copy");
    }
  };

  window.importPlanJson = function () {
    const textarea = document.getElementById("planJson");
    if (!textarea) return;

    try {
      const imported = JSON.parse(textarea.value);
      if (!imported || typeof imported !== "object") throw new Error("Invalid JSON");
      plan = imported;
      savePlan();
      state.importOpen = false;
      render();
    } catch (error) {
      alert("The JSON could not be imported. Check the format and try again.");
    }
  };

  window.toggleTheme = function () {
    const dark = !document.body.classList.contains("theme-dark");
    localStorage.setItem(STORAGE.theme, dark ? "dark" : "light");
    applyStoredTheme();
  };
})();
