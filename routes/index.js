'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');
const test = "";

router.get('/', (req, res, next) => {
  res.render('home', { title: 'Hello World!' });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('private');
});

module.exports = router;
