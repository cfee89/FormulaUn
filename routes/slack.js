var SlackParser = require('../services/slackParser');
var SlackMessageBuilder = require('../services/slackMessageBuilder');

var express = require('express');
var router = express.Router();
const slackParser = new SlackParser();
const slackMessageBuilder = new SlackMessageBuilder();
/* POST slack inputs. */
router.post('/', async function(req, res, next) {

  result = slackParser.parseSlackCommand(req);
  message = slackMessageBuilder.buildDriversListMessage(result);
  res.send(message);
});

module.exports = router;
