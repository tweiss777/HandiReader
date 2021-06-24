/ webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// webpack.config.js
module.exports = [
  // This config targets our main process in electron
  {
    mode: 'development',
    entry: './src/index.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'index.js',
      devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    }
  },
  // this config targets the renderer process in electron.
  {
    mode: 'development',
    entry: './src/App.tsx', // the file that is run by npm
    target: 'electron-renderer',
    devtool: 'source-map',
    module: 
    { 
      rules: [{
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{loader:'ts-loader'}]
        },
        {
        test:/\.css$/,
        // include: /src/,
        use: [
          'style-loader', // Our css loader for TypeScript
          {
            loader: 'typings-for-css-modules-loader',
            options:{
              modules: true,
              namedExport: true,
              camelCase: true,
            }
          }
        ]

        }
      ] 
    },
    resolve: {
      extensions: ['.ts', '.js', '.json','.tsx','.css'],
    },
    // Our output of the file where the typescript is transpiled into javascript
    output: {
      path: __dirname + '/dist',
      filename: 'App.js' // where all our typescript gets written in javascript
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  },
];
