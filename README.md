# Power App · Weekstack V2

![Power App icon](icon-192.png)

**Power App** és una PWA de powerlifting feta amb HTML, CSS i JavaScript vanilla. L'app organitza un bloc de força setmanal amb una interfície tipus *week stack*: blocs grans, tipografia forta, estat de completat, registre de pesos reals i edició directa del pla.

## Característiques

- **PWA instal·lable** amb `manifest.json`, icones maskable i `service worker`.
- **Funcionament offline** gràcies a una cache local dels fitxers principals.
- **Rutina de 5 dies**: Upper 1, Lower 1, Cardio, Upper 2 i Lower 2.
- **Bloc de programació setmanes 26-37**, amb fases com Accumulation, Recruitment, Deload, Intensification, Peaking i Test.
- **Vista Daily** amb warm-up, entrenament principal i mobility.
- **Editor del pla** per modificar fase, exercicis, top sets, work sets i notes.
- **Importació/exportació JSON** per fer còpies de seguretat del pla.
- **Seguiment local** de tasques completades i pesos reals.
- **Tema clar/fosc** guardat al navegador.
- **Sense backend i sense dependències externes**.

## Demo local

Aquest projecte és estàtic. Només cal servir els fitxers des d'un servidor local.

```bash
python3 -m http.server 8080
```

Després obre:

```text
http://localhost:8080
```

> Evita obrir `index.html` directament amb `file://`, perquè el service worker i algunes funcions PWA necessiten `localhost` o HTTPS.

## Instal·lació com a PWA

1. Obre l'app al navegador.
2. En mòbil, fes servir **Add to Home Screen** / **Afegeix a la pantalla d'inici**.
3. En desktop, usa la icona d'instal·lació del navegador si apareix.
4. L'app s'obrirà en mode `standalone`.

## Estructura del projecte

```text
.
├── index.html        # Entrada principal de la PWA
├── styles.css        # Estils, layout, tema clar/fosc i variables visuals
├── data.js           # Programa, dies, warm-ups, mobility i blueprints
├── app.js            # Renderitzat, navegació, editor i persistència local
├── manifest.json     # Configuració PWA
├── sw.js             # Service worker i estratègia de cache
├── icon-192.png      # Icona PWA 192x192
├── icon-512.png      # Icona PWA 512x512
└── README.md
```

## Fitxers principals

### `index.html`

Defineix la base HTML, el contenidor `#app`, el manifest, la icona Apple i carrega `data.js` abans d'`app.js`.

### `data.js`

Conté la configuració i el contingut del programa:

- `progression`: progressió principal per dia i setmana.
- `APP_DAYS`: dies de la setmana i focus de cada sessió.
- `APP_SETTINGS`: nom del programa, data d'inici i rang de setmanes.
- `CARDIO_SESSION`: sessió específica de condicionament i rebuild.
- `WARMUPS`: escalfaments per dia.
- `MOBILITY`: mobilitat i estiraments per dia.
- `PROGRAM_BLUEPRINT`: estructura base de cada sessió sense pesos.

### `app.js`

Gestiona tota la lògica de la interfície:

- renderitzat de vistes;
- navegació entre pestanyes;
- selecció de setmana i dia;
- editor del pla;
- checklists de warm-up, exercicis i mobility;
- registre de pesos reals;
- importació/exportació JSON;
- tema clar/fosc;
- registre del service worker.

### `styles.css`

Defineix l'estètica Weekstack: superfícies grans, jerarquia tipogràfica agressiva, ombres suaus, variables de color i adaptació responsive.

### `manifest.json`

Configura la PWA amb nom, colors, orientació vertical, mode `standalone` i icones.

### `sw.js`

Cacheja els assets principals i permet que l'app carregui offline després de la primera visita.

## Vistes de l'app

### Daily

Vista principal. Mostra la setmana com un stack de dies i expandeix el dia seleccionat amb:

- warm-up;
- main training;
- mobility;
- percentatge de completat;
- camps per registrar pesos o resultats reals.

### Plan

Editor del programa. Permet canviar el contingut de cada setmana i dia:

- fase del bloc;
- nom de l'exercici;
- component;
- top set;
- work set;
- notes;
- afegir o eliminar exercicis;
- reset del pla;
- exportar i importar JSON.

### Program

Mostra el blueprint general de cada dia sense pesos.

### Warm-up

Mostra l'escalfament recomanat per cada sessió.

### Mobility

Mostra els exercicis de mobilitat i estiraments per cada sessió.

## Persistència local

L'app desa les dades al `localStorage` del navegador. No hi ha servidor ni base de dades remota.

Claus utilitzades:

```text
powerApp.weekstack.plan.v2
powerApp.weekstack.done.v2.<week>.<day>
powerApp.weekstack.actual.v2.<week>.<day>
powerApp.weekstack.theme.v2
```

Això vol dir que les dades són locals del dispositiu i del navegador. Per migrar-les, utilitza l'exportació JSON de la pestanya **Plan**.

## Personalització

### Canviar colors

Edita les variables del principi de `styles.css`:

```css
:root {
  --color-bg: #d8d8d6;
  --color-bg-soft: #e4e3e0;
  --color-surface: #f0efec;
  --color-text: #3d3d40;
  --color-accent: #f05a1a;
}
```

També pots ajustar el tema fosc dins del bloc:

```css
body.theme-dark {
  --color-bg: #343433;
  --color-accent: #ff6a24;
}
```

### Canviar el rang de setmanes

Edita `APP_SETTINGS` dins de `data.js`:

```js
const APP_SETTINGS = {
  programName: "Powerlifting Block",
  startDate: "2026-04-20",
  baseWeek: 26,
  minWeek: 26,
  maxWeek: 37
};
```

### Modificar la rutina

Edita `progression` dins de `data.js`. Cada dia i setmana té aquesta estructura:

```js
"Upper 1": {
  26: {
    phase: "Accumulation",
    exercises: {
      "Bench Press": {
        top: "Triple @ 115",
        work: "4x4 @ 107.5"
      }
    }
  }
}
```

Quan l'app carrega per primera vegada, converteix aquesta progressió en un pla editable i el desa a `localStorage`.

### Afegir un nou asset a la cache

Si afegeixes fitxers nous, actualitza `ASSETS` a `sw.js`:

```js
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];
```

També és recomanable canviar `CACHE_NAME` per forçar una nova versió de cache.

## Reset i neteja de cache

Si fas canvis i el navegador continua mostrant una versió antiga:

1. Obre DevTools.
2. Ves a **Application**.
3. Entra a **Service Workers**.
4. Fes **Unregister**.
5. Ves a **Storage**.
6. Fes **Clear site data**.
7. Recarrega la pàgina.

## Desplegament

Com que és una app estàtica, es pot publicar fàcilment a:

- GitHub Pages;
- Netlify;
- Vercel;
- qualsevol servidor HTTPS estàtic.

Perquè la PWA funcioni correctament fora de `localhost`, cal servir-la amb HTTPS.

## Notes de desenvolupament

- No hi ha procés de build.
- No hi ha dependències NPM.
- El renderitzat es fa injectant HTML dins de `#app`.
- Les funcions exposades a `window` permeten gestionar els events declarats inline.
- L'estat important es persisteix en `localStorage`.
- El service worker fa una estratègia cache-first i cau a `index.html` si no hi ha xarxa.
