var slackParser = require('../services/slackParser');

var express = require('express');
var router = express.Router();

/* POST slack inputs. */
router.post('/', async function(req, res, next) {

  slackParser.parseSlackCommand(req);
  res.send();
});

module.exports = router;
