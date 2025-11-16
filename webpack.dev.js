const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  // Dev server
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
    watchFiles: ['src/**/*'],
  },

  plugins: [],
});
