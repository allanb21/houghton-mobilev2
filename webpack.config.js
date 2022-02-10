const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  stats: {
    errors: false,
    warnings: false
  },
  mode: 'development',
  entry: ['babel-polyfill', './src/main.jsx'],
  // entry: ['babel-polyfill', './src/main.tsx'],
  output: {
    path: path.join(__dirname, './www/js'),
    filename: '[name].js'
  },
  node: {
    __dirname: false
  },
  devtool: 'source-map', // 'eval'
  module: {
    rules: [
      /*
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'awesome-typescript-loader']
      },
      */
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'standard-loader',
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000',

      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },

    ]
  },
  resolve: {
    extensions: ['.js', /*'.ts', '.tsx',*/ '.jsx', '.json']
  },
  externals: {},
  devServer: {
    port: 8200,
    contentBase: [
      path.join(__dirname, './src/'),
      path.join(__dirname, './www/'),
      path.join(__dirname, './platforms/browser/www/')
    ],
    inline: true,
    hot: true,
    open: true,
    liveReload: true,
    watchContentBase: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      https: true
    },
    historyApiFallback: true,
    clientLogLevel: 'none'
  },
  plugins: [
    WriteFilePlugin({
      useHashIndex: true
    })
  ]
}
