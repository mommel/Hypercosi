const
  path                    = require('path'),
  BrowserSyncPlugin       = require('browser-sync-webpack-plugin'),
  { CleanWebpackPlugin }  = require('clean-webpack-plugin'),
  HtmlWebPackPlugin       = require("html-webpack-plugin"),
  UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
  
module.exports = {
  // entry: './src/index.js',
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
      'fast-average-color': 'fast-average-color/dist/index.esm.js'
    }
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: "/assets/",
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, "/dist/")],
    publicPath: "/assets/",
    port: 9020,
    filename: "bundle.js",
    compress: false,
    //hot: true,
    open: true,
    //https: true,
    //watchOptions: {
    //  aggregateTimeout: 1000,
    // ignored: /node_modules/,
    //  poll: true
    //}
  },
  // target: "electron-main",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        use:  ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.json$/,
        include: /i18n/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-plugin-i18n-json/formatter.js'),
        },
      },
      {
        test: /\.html?$/,
        use: [
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
            }
          }
        ]
      },
    ]
  },
  /*
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false,
          }
        }
      }),
    ],
  },
  */
  plugins: [
    //new CleanWebpackPlugin(),
    //new BrowserSyncPlugin({
    //  host: 'localhost',
    //  port: 9020,
    //  proxy: 'http://localhost:9020/'
    //},
    //{
    //  reload: false
    //}),
    new HtmlWebPackPlugin({
      "files": {
        "css": [ "main.css" ],
        "js": [ "assets/head_bundle.js", "assets/main_bundle.js"],
        "chunks": {
          "head": {
            "entry": "assets/head_bundle.js",
            "css": [ "main.css" ]
          },
          "main": {
            "entry": "assets/main_bundle.js",
            "css": []
          },
        }
      },
      title: 'My App',
      filename: 'assets/admin.html',
      template: 'src/index.html'
    })
    //new HtmlWebPackPlugin()
  ]
};