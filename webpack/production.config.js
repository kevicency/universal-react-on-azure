// Webpack config for creating the production bundle.

var path = require('path');
var webpack = require('webpack');
var writeStats = require('./util/writeStats');
var strip = require('strip-loader');

var assetsPath = path.join(__dirname, '../static/dist');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': './src/client.js'
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [
        strip.loader('debug'),
        'babel?stage=0&optional=runtime'
      ]},
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    // new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // set global vars
    new webpack.DefinePlugin({
      'process.env': {

        // Mainly used to require CSS files with webpack, which can happen only on browser
        // Used as `if (process.env.BROWSER)...`
        BROWSER: JSON.stringify(true),

        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        }
    }),

    // stats
    function() { this.plugin('done', writeStats); }
  ]
};
