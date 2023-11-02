/* global __dirname, require, module*/
// const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, minimize;

if (env === 'build') {
  minimize = true;
  outputFile = libraryName + '.min.js';
} else {
  minimize = false;
  outputFile = libraryName + '.js';
}

const config = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: minimize
  },
plugins: [
  new ESLintPlugin({
    // Aquí puedes añadir opciones específicas para el plugin
    extensions: ['js', 'jsx'],
    exclude: 'node_modules',
    // más opciones si las necesitas
  }),
  // otros plugins
],
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
    alias: {
      'formio-export': path.resolve(__dirname, 'src/')
    }
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
};

module.exports = config;
