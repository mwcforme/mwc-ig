# MWC Instagram Studio

An offline Instagram static-image generator for Men's Wellness Centers. Open **index.html** in Chrome or Edge to use it; no installation, API key, or account is needed.

![The twelve MWC templates](docs/template-grid.jpg)

## Create a post

Choose a template, edit its copy, select supplied photography or upload your own, then export a PNG. Each template keeps separate edits during the session. **Save project** downloads all 12 drafts as JSON, including uploaded photos; **Open project** restores them. Edits are not automatically saved.

**View 12-post grid** shows the collection in portrait format and exports a 3240 × 5400 PNG. Older 12-template project files are accepted and rendered using the current layouts. Three-template project files are not supported.

## Templates

Note to self, Marker poster, Photo contact sheet, Screenshot checklist, Cross-out / rewrite, Message exchange, Big number / list, Question sticker, Photo caption strip, Side-by-side, Step stack, and Calendar reminder.

## Formats and safe zones

| Format | Export size | Clear sides | Clear top | Clear bottom |
| --- | --- | --- | --- | --- |
| Portrait 4:5 | 1080 × 1350 | 80 px | 175 px | 175 px |
| Square 1:1 | 1080 × 1080 | 80 px | 80 px | 80 px |
| Story 9:16 | 1080 × 1920 | 80 px | 270 px | 390 px |

These conservative studio margins apply to essential text and logos. Portrait copy also stays inside a centered square crop. The renderer checks actual glyph and logo bounds, reserves space for disclosures, and prevents export when copy is too small or a list has too many items. Safe-zone guides are preview overlays and are never exported.

Backgrounds and photos can extend beyond the guides. Review uploaded photo crops. Platform overlays vary by placement; the Story preset is not a Reels preset.

## Develop

Python 3 builds the single-file app without third-party packages:

```sh
python scripts/build.py
```

Edit `src/studio.html` for the interface and `src/studio.js` for templates and rendering, then rebuild. Required supplied images live in `assets/`. The generated `index.html` is committed so the app can be used immediately.

To run browser checks with Node.js and Playwright:

```sh
npm install
npx playwright install chromium
npm test
```

The checks cover 108 content-bound cases across 12 templates and 3 formats, type sizes, disclosures, guide-free PNG exports, project save/open, list limits, uploads, grid export, and mobile width. Screenshots and test files are saved under ignored `test-results/`.

Typography uses local system fonts, so rendering can vary slightly across devices.

## Media and content

**No AI-generated people without a supplied reference.** This application does not generate people or images. Included photos come from the supplied MWC asset pack; their original provenance has not been independently verified. The contact-sheet layout includes a supplied evening-sky image alongside the selected photo.

The supplied Hone Health and PeterMD grid captures informed format variety. The [instagram-skills repository](https://github.com/sergebulaev/instagram-skills) informed short, single-idea copy and natural wording; it is not an installed dependency. Competitor captures and the superseded financing design are not included.

This app exports images. It does not publish to Instagram or send images to an external service.
