const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config  = require('./webpack.config.js');
const complier = webpack(config);
const app = express();

app.use(WebpackDevMiddleware(complier,{}));

app.listen(3030,()=>{
	console.log('done-----------------')
})