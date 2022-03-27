var SlackParser = require('../services/slackParser');

var express = require('express');
var router = express.Router();
const slackParser = new SlackParser();

/* POST slack inputs. */
router.post('/', async function(req, res, next) {
  response = await slackParser.parseSlackCommand(req);
  res.json(response);
});

module.exports = router;
