var ergastApiService = require('../services/ergastApiService');
var express = require('express');
var router = express.Router();

/* POST slack inputs. */
router.post('/', async function(req, res, next) {
//  let driverResult = await ergastApiService.getDrivers();
console.log(req);
});

module.exports = router;
