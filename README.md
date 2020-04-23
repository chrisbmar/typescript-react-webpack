# Typescript, React and Webpack setup

A base file structure with an eslint and prettier config. The webpack config has been adjusted to work with scss modules and uses awesome-typescript-loader to compile the tsx. Husky is used as a pre-commit hook with lint-staged.

## Building and running on localhost

First, clone the project:

```sh
git clone https://github.com/chrisbmar/typescript-react-webpack.git
```

Install dependencies:

```sh
yarn install
```

To run with a development env:

```sh
yarn dev
```

To run with a production env:

```sh
yarn dev:prod
```

To create a production build:

```sh
yarn build
```
