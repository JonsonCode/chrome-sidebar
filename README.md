
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Intro ](#intro-)
- [Features ](#features-)
- [Installation ](#installation-)
- [Procedures: ](#procedures-)
- [And next, depending on the needs:](#and-next-depending-on-the-needs)
  - [For Chrome: ](#for-chrome-)
  - [For Firefox: ](#for-firefox-)
  - [Remember in firefox you add plugin in temporary mode, that's mean it's disappear after close browser, you must do it again, on next launch.](#remember-in-firefox-you-add-plugin-in-temporary-mode-thats-mean-its-disappear-after-close-browser-you-must-do-it-again-on-next-launch)
- [Screenshots ](#screenshots-)
  - [New Tab ](#new-tab-)
  - [Popup ](#popup-)

## Intro <a name="intro"></a>

This boilerplate is made for creating chrome extensions using React and Typescript.
> The focus was on improving the build speed and development experience with Vite.

## Features <a name="features"></a>


## Installation <a name="installation"></a>

## Procedures: <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Install pnpm globally: `npm install -g pnpm` (check your node version >= 16.6, recommended >= 18)
4. Run `pnpm install` 

## And next, depending on the needs:

### For Chrome: <a name="chrome"></a>

1. Run:
    - Dev: `pnpm dev` or `npm run dev`
    - Prod: `pnpm build` or `npm run build`
2. Open in browser - `chrome://extensions`
3. Check - `Developer mode`
4. Find and Click - `Load unpacked extension`
5. Select - `dist` folder

### For Firefox: <a name="firefox"></a>

1. Run:
    - Dev: `pnpm dev:firefox` or `npm run dev:firefox`
    - Prod: `pnpm build:firefox` or `npm run build:firefox`
2. Open in browser - `about:debugging#/runtime/this-firefox`
3. Find and Click - `Load Temporary Add-on...`
4. Select - `manifest.json` from `dist` folder

### <i>Remember in firefox you add plugin in temporary mode, that's mean it's disappear after close browser, you must do it again, on next launch.</i>

## Screenshots <a name="screenshots"></a>

### New Tab <a name="newtab"></a>

<img width="971" src="https://user-images.githubusercontent.com/53500778/162631646-cd40976b-b737-43d0-8e6a-6ac090a2e2d4.png">

### Popup <a name="popup"></a>

<img width="314" alt="popup" src="https://user-images.githubusercontent.com/53500778/203561728-23517d46-12e3-4139-8a4f-e0b2f22a6ab3.png">

