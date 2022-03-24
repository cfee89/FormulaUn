var SlackParser = require('../services/slackParser');
var SlackMessageBuilder = require('../services/slackMessageBuilder');

var express = require('express');
var router = express.Router();
const slackParser = new SlackParser();
const slackMessageBuilder = new SlackMessageBuilder();
/* POST slack inputs. */
router.post('/', async function(req, res, next) {

  result = await slackParser.parseSlackCommand(req);
  message = slackMessageBuilder.buildDriversListMessage(result);
  console.log(message);
  res.json(message);
});

module.exports = router;
