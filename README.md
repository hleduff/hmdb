# Hugo's Movie Database

This web application displays a list of movies and a details page of each movie.

It's a [React.js](https://reactjs.org/) app written in [TypeScript](https://www.typescriptlang.org/).

It is powered by [The Movie Database API](https://developers.themoviedb.org/3).

## Requirements

A recent version of [Node.js](https://nodejs.org/) (preferably v18) installed on your machine.

## Development

To install the dependencies, run the following command from your console:

> I really recommend using pNPM, it's much faster than any other alternative.

```
$ pnpm i
```

Then, to start the development server:

```
$ pnpm dev
```

Of course you can also use plain old npm (or [yarn](https://yarnpkg.com/) if you have it):

```
$ npm i && npm run dev
```

## Features

### User features

- a home page which shows the popular movies list by default. A Navigation allows the user to show the Top Rated or Upcoming movies instead.
- click on a movie from the home page or movie carousel and you are directed to the Movie page, which shows the movie details:<br>
    • poster, title, runtime, release year, genres, director, summary, original title, IMDb link, JustWatch link<br>
    • a carousel with a list of recommended related movies<br>
- a region switcher changes the language and region for every API query. This means you can see the movie info in the language of your choice between FR, ES and EN.

### Development features

- This app was bootstrapped with [Vite](https://vitejs.dev/) using the `react-swc-ts` preset. [SWC](https://swc.rs/) is a much faster alternative to the JavaScript transpiler [Babel](https://babeljs.io/).
- [ESLint](https://eslint.org/) with [AirBNB](https://www.npmjs.com/package/eslint-config-airbnb-typescript)-based config.
- [Husky](https://typicode.github.io/husky) and [Lint Staged](https://github.com/okonet/lint-staged) to run ESLint automatically on commit

### Project structure

- The store is in `/src/app/store.ts`
- The presentational components are in `/src/components/`
- The view components are in `/src/views/`
- The `/src/features/` folder contains the logic around the API and the functional components and [Slices](https://redux-toolkit.js.org/api/createslice) associated. RTK Query documentation says it's highly recommended to put all the API endpoints in an `apiSlice.ts` file in a `/src/api/` folder.
- Finally, there are utility functions in `/utils/` and global types in `/types/`.

## Plans for next releases

The point is not to make a clone of IMDb, but this project could have many more features. Here's what I have in mind:

- improving the UI which is very basic for the moment. The language switcher would be a good start
- making the whole app multilingual, using i18next or more simply a reducer and hook to switch between static language files
- clicking on a genre tag or director would lead to a list of movies of the same genre or director
- add genre navigation from the home page
- add search
- clicking on the movie poster on the movie page to see the trailers and image gallery
- add a toggle dark/light mode switch
- work on accessibility (check color contrast, touch area size for interactive elements)
