import webpack = require('webpack');
import hot = require('webpack-hot-client');

const compiler = webpack();

hot(compiler, { logLevel: 'info', reload: false });
