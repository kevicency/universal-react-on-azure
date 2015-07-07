# Universal React on Azure
---

This an example for running an universal React app on Azure. The following stack is used:

  * [React @ 0.14.0-beta1](https://github.com/facebook/react) for improved server-side redering
  * [React Router @ 1.0.0-beta2](https://github.com/rackt/react-router) for better API on server-side
  * [Express](http://expressjs.com)
  * [Babel](http://babeljs.io) for transpiling JSX, ES6/7
  * [Webpack](http://webpack.github.io) for bundling
  * [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html) for local development
  * [React Hot Loader](https://github.com/gaearon/react-hot-loader)
  * [Redux](https://github.com/gaearon/redux)
  * [Material Design Lite](http://getmdl.io) CSS Framework

## Installation

```
$ npm install
```
Ignore any errors about peer dependencies :see_no_evil:

## Running Dev Server

```
$ npm run dev
```

## Building and Running Production Server

```
$ npm run start:prod
```

## Deploying on Azure

Set environment variables on Azure

  * `NODE_ENV            = production`
  * `NODE_PATH           = ./src`
  * `BABEL_DISABLE_CACHE = 1`

### Custom Deployment Script

To bundle the javascripts on Azure during deployment, a custom deployment
script is needed that runs the required commands.

Scaffold a script using `azure-cli`
```
$ azure site deploymentscript --node
```

Add the bundle command (here: `npm run build`) after `npm install`, see [deploy.sh](https://github.com/kmees/universal-react-on-azure/blob/master/deploy.sh#L118).
