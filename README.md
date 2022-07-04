# AttuneReviewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

# High level application design

Here is high level application design ( continuously evolving :) )

```sh
./src
├── app
|   ├── charts-container
|   |   ├── chartjs
|   |   ├── d3js
|   |   ├── charts-container.component.html
|   |   ├── charts-container.component.scss
|   |   ├── charts-container.component.ts
|   |   └── charts.module.ts
|   ├── map-viewer
|   ├── data-editor
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
|
├── assets
│   ├── ...
│
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
│
├── ...

```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
