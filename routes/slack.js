var ergastApiService = require('../services/ergastApiService');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
//  let driverResult = await ergastApiService.getDrivers();
console.log(req);
});

module.exports = router;
