var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/components');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: {app: APP_DIR},
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [APP_DIR],
        loader : 'babel-loader',
        query : {
                presets:['es2015', 'react']
            }
      }
    ]
  }

};

module.exports = config;



// var webpack = require('webpack');
// var path = require('path');

// var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');
// var TEST_DIR = path.resolve(__dirname, 'src/client/appDup');

// var config = {
//   entry: {app: APP_DIR, test: TEST_DIR},
//   output: {
//     path: BUILD_DIR,
//     filename: '[name].bundle.js'
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : APP_DIR,
//         loader : 'babel-loader',
//         query : {
//                 presets:['es2015', 'react']
//             }
//       }
//     ]
//   }





// };

// module.exports = config;