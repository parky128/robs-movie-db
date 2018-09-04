# Robs Movie Database (RMDb)

Key Features:
- Search for Actors, Actresses, Movies and TV Shows
- Advanced search feature for more custom search types 
  - Note that you can currently search for movies staring chosen actors, actresses, genres and release dates, more criteria options are planned for a future release!
- Internationalisation support for both English and German
  - DISCLAIMER: German translation came from Google Translate so if there are any mistakes then please raise an issue on this repo and I will sort asap!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Getting Stared

Clone this repo to your machine, then from a command prompt, cd into the directory and run `npm install` to install all necessary project dependencies.

Once complete, then run `ng serve` which will build and when ready you can navigate to `http://localhost:4200/` in your browser to start using the application

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Coverage results will be output to an auto generated test/coverage folder at the root of the project directory. Just open the index.html file in a browser to view the current test coverage.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

NOTE - A very basic scenario has been written which will run and pass, but I don't suggest writing further scenarios for against the live tmdb database as it could easily go offline, data can be changed at anytime, etc.
