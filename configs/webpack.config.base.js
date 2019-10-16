import path from 'path';
import webpack from 'webpack';
import { dependencies } from '../package.json';

export default {
  externals: [...Object.keys(dependencies || {})],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.json$/,
        include: /i18n/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-plugin-i18n-json/formatter.js'),
        },
      },
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ]
};
