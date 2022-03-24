var SlackParser = require('../services/slackParser');

var express = require('express');
var router = express.Router();
const slackParser = new SlackParser();
/* POST slack inputs. */
router.post('/', async function(req, res, next) {

  result = slackParser.parseSlackCommand(req);
  res.send(result);
});

module.exports = router;
