## Requirements

- Node: v12.20.0
- Yarn: v1.22.10
- TypeScript: v4.3.2

## Getting started

- `nvm use` (when using nvm, otherwise make sure Node v.12.20 is used)
- `yarn`
- `tsc --watch` (in a separate terminal, or make sure your IDE handles it)
- Run the project:
  - `yarn start:browser` to start in browser (webpack will watch your changes and update the browser)
  - `yarn start:android` to make a development build (webpack will watch your changes and update the android project)
  - `yarn build` to make a development build
  - `yarn build:prod` to make a production build
