const express = require('express');
const router = express.Router();
const file = require('');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Node.js Schema Validator',
    description: 'Custom JSON schema validator build on Node.js, Express, and Bootstrap' });
});

module.exports = router;
