const path = require('path');

module.exports = {
  entry: './https://code.jquery.com/jquery-3.4.1.min.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery-3.4.1.min.js',
  },
};
module.exports = {
  entry: './jQuery/home3d27.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'home3d27.js',
  },
};
; module.exports = {
  //...
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
};