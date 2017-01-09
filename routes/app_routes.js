'use strict';

const express = require('express');
const router = express.Router();

process.env.NODE_ENV || (process.env.NODE_ENV = 'development');

var babies = {'Laika': 'dog',
                'Bruce': 'cat',
                'Sir Hopsalot': 'bunny'};

router.route('/')
    .get(function(request, response){
      response.json(Object.keys(babies));
    });


module.exports = router;
