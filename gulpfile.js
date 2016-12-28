'use strict';

//https://semaphoreci.com/community/tutorials/setting-up-an-end-to-end-testing-workflow-with-gulp-mocha-and-webdriverio


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const requireDir = require('require-dir');
requireDir('./tasks');