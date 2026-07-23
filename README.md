# Power App

Power App is a mobile-first progressive web application for following, editing, and recording a structured powerlifting program. It combines weekly strength programming, warm-up routines, mobility work, zone 2 cardio, exercise completion tracking, and actual-performance logging in a single installable web app.

The project is built with plain HTML, CSS, and JavaScript. It has no framework, package manager, backend, database, or build step, which makes it straightforward to host as a static site on GitHub Pages.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Application Views](#application-views)
- [Technology](#technology)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Installing the App](#installing-the-app)
- [Configuration and Customization](#configuration-and-customization)
- [Data Model](#data-model)
- [Local Storage](#local-storage)
- [Offline Support and Cache Updates](#offline-support-and-cache-updates)
- [Design and Accessibility](#design-and-accessibility)
- [Browser Support](#browser-support)
- [Troubleshooting](#troubleshooting)
- [Privacy](#privacy)
- [Development Notes](#development-notes)
- [License](#license)

## Overview

Power App presents a seven-week training block organised into five recurring sessions:

- Monday: primary squat work and bench volume
- Tuesday: primary bench work plus back, shoulder, and triceps accessories
- Wednesday: zone 2 cardio and rebuild work
- Thursday: primary deadlift work plus squat and bench variations
- Friday: technical or volume bench and squat work plus accessories

The default program includes build, push, rebuild, and holiday phases. The exact exercises, loads, repetitions, RPE targets, warm-ups, and mobility routines are defined in `data.js` and can be edited directly in the application.

The app automatically selects the current week from the configured program start date. It also selects the appropriate weekday from Monday to Friday, falling back to the first training day on weekends.

## Features

- Mobile-first layout designed for phone use
- Installable progressive web app
- Offline access through a service worker
- Seven-week editable powerlifting progression
- Five training days per week
- Daily warm-up, main training, and mobility sections
- Exercise completion tracking
- Per-exercise actual-performance fields
- Automatic current-week and current-day selection
- Editable phases, exercises, top sets, working sets, components, and notes
- Add and delete exercise controls
- JSON import and export for plan backups
- Local reset to the original program
- Light and dark themes
- Persistent local data without an account or server
- Reduced-motion support for users who prefer fewer animations
- Safe-area support for modern mobile devices

## Application Views

### Daily

The Daily view is the primary training screen. It contains:

- Week and day selectors
- An expandable stack of all training days
- Completion progress for each day
- Warm-up tasks
- Main training exercises
- Mobility tasks
- Checkboxes for completed items
- An `Actual` field for recording the weight, repetitions, RPE, or any other result

Completion and actual-performance data are stored separately for every week and training day.

### Plan

The Plan view is the built-in program editor. It allows the user to:

- Select a week
- Show one day or all days
- Edit the phase name
- Edit every exercise field
- Add new exercises
- Delete exercises
- Export the complete editable plan as JSON
- Import a previous JSON backup
- Reset the editable plan to the defaults from `data.js`

All changes are saved immediately in the browser and are reflected in the other views.

### Program

The Program view shows the exercise blueprint for the selected training day. It provides a stable overview of the exercise order while directing the user to Daily or Plan for week-specific loads and prescriptions.

### Warm-up

The Warm-up view displays the complete warm-up flow for the selected day, including general preparation, mobility, activation, and exercise-specific ramp-up work.

### Mobility

The Mobility view displays the post-training stretching or recovery flow assigned to the selected day.

## Technology

The application intentionally uses a small, dependency-free stack:

- HTML5
- Modern CSS
- Vanilla JavaScript
- Web App Manifest
- Service Worker API
- Cache Storage API
- Local Storage API
- Clipboard API with a legacy copy fallback

There is no compilation, bundling, transpilation, or dependency installation step.

## Project Structure

```text
.
├── index.html
├── styles.css
├── data.js
├── app.js
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
└── README.md
```

### File Responsibilities

| File | Purpose |
| --- | --- |
| `index.html` | Defines the application shell, metadata, manifest link, icons, and script loading order. |
| `styles.css` | Contains the complete responsive visual system, themes, layout, components, animations, and accessibility media queries. |
| `data.js` | Defines the default progression, training days, app settings, warm-ups, mobility work, and program blueprints. |
| `app.js` | Renders every view, manages user interaction, persists data, imports and exports plans, and registers the service worker. |
| `manifest.json` | Configures the installable PWA name, colours, display mode, orientation, scope, and icons. |
| `sw.js` | Pre-caches the application shell and provides cache-first offline behaviour. |
| `icon-192.png` | Standard application icon used by the manifest and Apple touch configuration. |
| `icon-512.png` | Large application icon used during installation and on supported launch surfaces. |

The order of `data.js` and `app.js` in `index.html` is important. `data.js` must load first because `app.js` reads the constants defined there.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
cd REPOSITORY
```

Replace `USERNAME` and `REPOSITORY` with the correct GitHub account and repository name.

### 2. Run a Local Static Server

Service workers do not run correctly when the project is opened directly through a `file://` URL. Use a local HTTP server instead.

With Python:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

With Node.js and `serve`:

```bash
npx serve .
```

No package installation is required for the application itself.

## Deploying to GitHub Pages

The project uses relative asset paths, so it can be deployed either at a user or organisation root domain or inside a project repository path.

### Repository Setup

1. Place all project files in the repository root, or in the folder selected as the GitHub Pages source.
2. Commit and push the files.
3. Open the repository settings on GitHub.
4. Open the Pages section.
5. Select branch-based deployment.
6. Select the deployment branch, usually `main`, and the correct folder, usually `/ (root)`.
7. Save the configuration.

For a project repository, the published address normally follows this pattern:

```text
https://USERNAME.github.io/REPOSITORY/
```

For a user or organisation site repository, it normally follows this pattern:

```text
https://USERNAME.github.io/
```

The manifest uses relative values for `start_url` and `scope`, which allows the application to work from a GitHub Pages subdirectory without hard-coded domain paths.

### Required Deployment Files

Do not omit any file listed in the service worker asset array:

```text
index.html
styles.css
data.js
app.js
manifest.json
icon-192.png
icon-512.png
```

The `sw.js` file must also be deployed in the same directory as `index.html` because `app.js` registers it with the relative path `sw.js`.

## Installing the App

Because the project includes a web app manifest and service worker, supported browsers can install it as a standalone application.

### Android and Desktop Chromium Browsers

1. Open the deployed site over HTTPS.
2. Use the browser's install option.
3. Confirm installation.

### iPhone and iPad

1. Open the site in Safari.
2. Open the Share menu.
3. Select Add to Home Screen.
4. Confirm the name and installation.

The app launches in standalone portrait mode and uses the colours configured in `manifest.json` and `index.html`.

## Configuration and Customization

Most program configuration is located in `data.js`. Visual customization is located in `styles.css`.

### Change the Program Name

Edit `APP_SETTINGS` in `data.js`:

```js
const APP_SETTINGS = {
  programName: "Powerlifting Block",
  startDate: "2026-07-13",
  baseWeek: 0,
  minWeek: 0,
  maxWeek: 6
};
```

`programName` appears in the application header.

### Change the Program Calendar

The automatic week selector uses four settings:

| Setting | Meaning |
| --- | --- |
| `startDate` | ISO date used as the beginning of `baseWeek`. |
| `baseWeek` | Week number assigned to `startDate`. |
| `minWeek` | Lowest selectable week. |
| `maxWeek` | Highest selectable week. |

The calculated week is clamped between `minWeek` and `maxWeek`.

Example for an eight-week block starting at week 1:

```js
const APP_SETTINGS = {
  programName: "Eight-Week Strength Block",
  startDate: "2026-09-07",
  baseWeek: 1,
  minWeek: 1,
  maxWeek: 8
};
```

When changing the available week range, add matching week entries to every day inside `progression`.

### Change Training Days

Edit the `APP_DAYS` array:

```js
const APP_DAYS = [
  {
    key: "Upper 1",
    weekDay: "MONDAY",
    short: "MON",
    label: "Day 1",
    focus: "Primary squat and bench volume"
  }
];
```

The `key` value links a day across:

- `progression`
- `WARMUPS`
- `MOBILITY`
- `PROGRAM_BLUEPRINT`
- Local-storage records

Keep these keys consistent everywhere.

The current-day mapping in `getCurrentDay()` inside `app.js` must also be updated when day keys or weekday assignments change.

### Edit the Default Progression

The `progression` object is organised by day and week:

```js
const progression = {
  "Upper 1": {
    "1": {
      phase: "Build",
      exercises: {
        "Squat competition single": {
          component: "Primary",
          top: "1 x 1 @ 145 kg / RPE 6",
          work: "",
          notes: ""
        }
      }
    }
  }
};
```

Supported exercise properties are:

| Property | Displayed As |
| --- | --- |
| `component` | Small exercise category or component label |
| `top` | Highlighted top-set prescription |
| `work` | Main working-set prescription |
| `notes` | Additional instructions |

Properties may be omitted when they are not needed.

### Edit Warm-ups and Mobility

Warm-ups and mobility routines use arrays of objects:

```js
const WARMUPS = {
  "Upper 1": [
    {
      title: "Raise",
      detail: "5 minutes of easy cycling or walking"
    }
  ]
};
```

The same structure is used by `MOBILITY` and `PROGRAM_BLUEPRINT`.

### Change Colours and Visual Tokens

The main design tokens are CSS custom properties at the top of `styles.css`:

```css
:root {
  --color-bg: #d8d8d6;
  --color-surface: #f0efec;
  --color-text: #3d3d40;
  --color-accent: #f05a1a;
  --color-danger: #8d2d21;
}
```

The dark theme overrides the same variables under `body.theme-dark`.

Changing these variables updates most of the interface without editing individual components.

### Change the App Name and PWA Metadata

Update the following files together:

- `<title>` in `index.html`
- `apple-mobile-web-app-title` in `index.html`
- `name` in `manifest.json`
- `short_name` in `manifest.json`
- `programName` in `data.js`

Update the icon files when changing the application identity.

## Data Model

At first launch, `app.js` converts the default `progression` object into an editable structure.

Default source format:

```js
{
  "Day key": {
    "Week number": {
      phase: "Build",
      exercises: {
        "Exercise name": {
          component: "",
          top: "",
          work: "",
          notes: ""
        }
      }
    }
  }
}
```

Editable local format:

```js
{
  "Day key": {
    "Week number": {
      phase: "Build",
      exercises: [
        {
          name: "Exercise name",
          component: "",
          top: "",
          work: "",
          notes: ""
        }
      ]
    }
  }
}
```

The conversion allows exercises to be reordered conceptually as an array and supports adding or deleting items through the Plan view.

## Local Storage

Power App stores all user changes in the current browser. No information is sent to a server.

The application uses these storage namespaces:

```text
powerApp.weekstack.plan.juliol2026.v1
powerApp.weekstack.done.juliol2026.v1.<week>.<day>
powerApp.weekstack.actual.juliol2026.v1.<week>.<day>
powerApp.weekstack.theme.v2
```

### Stored Information

| Category | Contents |
| --- | --- |
| Plan | Edited phases and exercise definitions for all weeks and days |
| Completion | Checked warm-up, training, and mobility items for one week and day |
| Actuals | Text entered into each exercise's Actual field |
| Theme | The selected light or dark theme |

### Important Behaviour When Editing `data.js`

Once a user has opened the app, the editable plan in Local Storage takes priority over the defaults in `data.js`. Changing the default progression will therefore not automatically replace an existing locally saved plan.

To load updated defaults, use one of these approaches:

1. Open Plan and select Reset plan.
2. Clear the site's browser storage.
3. Change the plan storage key in `app.js` when releasing a deliberately incompatible data version.

The Reset plan action resets only the editable plan. Completion records, actual values, and the selected theme use separate keys.

### Backup and Restore

Use Plan, then Import / Export:

1. Select Copy JSON to copy the current plan.
2. Save the JSON in a secure text file.
3. Paste the backup into the same field when restoring.
4. Select Import JSON.

The importer verifies that the pasted content is valid JSON and that its root value is an object. It does not perform a complete schema validation, so backups should retain the expected day, week, phase, and exercise structure.

## Offline Support and Cache Updates

The service worker pre-caches the main application files during installation. For GET requests, it follows a cache-first strategy:

1. Return the cached response when available.
2. Otherwise request the resource from the network.
3. Store the successful network response in the cache.
4. Fall back to `index.html` when both cache and network access fail.

This makes the installed application usable without a network connection after its assets have been cached.

### Releasing an Update

The cache version is controlled by `CACHE_NAME` in `sw.js`:

```js
const CACHE_NAME = "power-app-weekstack-v2-juliol-2026-detallat-v1";
```

Change this value whenever deploying updated assets that existing users must receive:

```js
const CACHE_NAME = "power-app-weekstack-v2-juliol-2026-detallat-v2";
```

During activation, the service worker deletes caches whose names do not match the current value.

Because the fetch strategy is cache-first, failing to change `CACHE_NAME` can leave existing users on older cached files even after a GitHub Pages deployment.

Also update the `ASSETS` array when adding a new file that must be available offline immediately after installation.

## Design and Accessibility

The interface includes several usability and accessibility considerations:

- Semantic headings, sections, labels, buttons, and form fields
- Accessible labels for the theme toggle and exercise completion buttons
- Large touch targets for mobile use
- Visible focus styles for form controls
- Responsive layouts for screens narrower than 420 pixels
- Safe-area padding for devices with display cut-outs or home indicators
- Horizontal tab scrolling on narrow screens
- A `prefers-reduced-motion` media query that effectively disables animation and transition timing
- Escaping of dynamic HTML, attribute, and inline-handler string values before rendering

The app is optimised for a narrow mobile viewport but is constrained to a maximum width of 520 pixels on larger screens.

## Browser Support

Power App is intended for current versions of browsers that support:

- Service workers
- Cache Storage
- Local Storage
- CSS custom properties
- CSS `color-mix()`
- `backdrop-filter`
- Dynamic viewport units such as `dvh`

The main functionality should work in current Chromium-based browsers and Safari. Visual details may degrade in browsers without support for newer CSS features. PWA installation behaviour varies by browser and operating system.

The app requires HTTPS in production for service-worker and installation features. GitHub Pages provides HTTPS for its standard domains.

## Troubleshooting

### The App Shows an Old Version

The service worker may still be serving cached files.

- Change `CACHE_NAME` in `sw.js` before deployment.
- Reload the page after the new service worker activates.
- If necessary, clear the site's storage or unregister the old service worker in browser developer tools.

### Changes in `data.js` Do Not Appear

A previously edited plan is probably stored in Local Storage.

- Open Plan and select Reset plan.
- Alternatively, clear the site's Local Storage.
- For a release that must force new defaults, change the plan storage key.

### The Service Worker Does Not Register Locally

Do not open `index.html` directly from the filesystem. Run a local HTTP server and open the app through `http://localhost`.

### Installation Is Not Offered

Check that:

- The site is served over HTTPS or localhost.
- `manifest.json` is reachable.
- Both icon files are reachable.
- `sw.js` is reachable and registers without an error.
- The browser and operating system support PWA installation.

On iOS and iPadOS, installation is performed manually through Safari's Add to Home Screen action.

### Import Fails

Confirm that the pasted value is valid JSON. JSON does not allow trailing commas, comments, or unescaped quotation marks.

A valid backup should have an object at its root and preserve the expected nested day and week structure.

### Copy JSON Does Not Work

The modern Clipboard API generally requires a secure context. Use the GitHub Pages HTTPS deployment or localhost. The app also attempts a legacy copy fallback for browsers that do not permit direct clipboard access.

### Progress or Actual Values Disappeared

These values are local to the exact browser profile and site origin. They are not synchronised between devices, browsers, private-browsing sessions, or domains.

Moving between different hostnames, such as a `github.io` address and a custom domain, creates a different browser origin and therefore a separate Local Storage area. Changing only the repository path under the same `USERNAME.github.io` hostname does not create a new origin; GitHub Pages projects on that hostname share the same Local Storage namespace, so unique storage-key prefixes are important.

## Privacy

Power App has no backend, account system, analytics integration, advertising code, or remote database in the supplied implementation.

Training-plan edits, completion records, actual values, and theme preferences remain in the browser's Local Storage. The browser may remove this data when the user clears site data, uses private browsing, or when the operating system reclaims website storage.

Users should export the plan JSON periodically if the edited program is important. The current export includes the editable plan but not completion records or actual-performance entries.

## Development Notes

- The interface is rendered from JavaScript into the `#app` element.
- View changes trigger a complete re-render of the application shell.
- Interactive handlers are exposed on `window` because the rendered markup uses inline `onclick` and `onchange` attributes.
- Dynamic text is escaped before being inserted into the generated HTML.
- The default progression stores exercises as keyed objects, while the editable version stores them as arrays.
- Exercise actuals are keyed by array index. Deleting or inserting exercises can therefore change which actual value corresponds to a later exercise for that day and week.
- Completion identifiers for warm-up and mobility items are also index-based. Reordering those arrays can make existing completion records refer to a different item.
- Local Storage has limited capacity and is appropriate for the current text-based dataset, but it is not intended for large media or long-term multi-user records.
- The app does not currently synchronise data across devices.
- The app does not currently export completion history or actual-performance history.

## License

No licence is included in the supplied project files. Until a licence is added, normal copyright restrictions apply.

To make the project reusable by others, add a `LICENSE` file and update this section with the selected licence, such as MIT, Apache-2.0, or another licence appropriate for the project.
