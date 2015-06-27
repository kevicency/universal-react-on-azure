import path from 'path'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import { notifyStats, writeStats } from './util'

const log = require('debug')('webpack:server'),
  host = process.env.host || 'localhost',
  port = parseInt(process.env.port) + 1 || 3001,
  assetsPath = path.resolve(__dirname, '../static/dist')

const config = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      'webpack-dev-server/client?http://' + host + ':' + port,
      'webpack/hot/only-dev-server',
      './src/client.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [
        'react-hot',
        'babel?stage=0&optional=runtime'
      ]}
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
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // stats
    function () {
      this.plugin('done', notifyStats);
    },
    function () {
      this.plugin('done', writeStats);
    }
  ]
}

const compiler = webpack(config)

const devServer = new WebpackDevServer(compiler, {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  stats: {
    colors: true
  }
})

devServer.listen(port, host, () => {
  log(`Listening on ${host}:${port}`)
})
