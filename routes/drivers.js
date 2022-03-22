var getDrivers = require('../services/ergastApiService');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let driverResult = await getDrivers();
  res.send(driverResult);
});

module.exports = router;
