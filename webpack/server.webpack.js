import path from 'path'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import writeStats from './util/writeStats'
import notifyStats from './util/notifyStats'

const log = require('debug')('webpack:server')
const host = process.env.host || 'localhost'
const port = parseInt(process.env.port, 10) + 1 || 3001
const assetsPath = path.resolve(__dirname, '../static/dist')

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
    function notifyStatsPlugin() {
      this.plugin('done', notifyStats)
    },
    function writeStatsPlugin() {
      this.plugin('done', writeStats)
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
