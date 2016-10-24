var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
var config = require('./src/config');

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(express.static(__dirname + '/www'));

var server = app.listen(process.env.PORT, function() {
  var host = config[process.env.NODE_ENV['host']];
  var port = config[process.env.NODE_ENV['port']];
  console.log('Example app listening at http://%s:%s', host, port);
});
