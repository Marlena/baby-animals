'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const requireDir = require('require-dir');
requireDir('./tasks');