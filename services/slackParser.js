var ErgastApiService = require('../services/ergastApiService');

class SlackParser {
    constructor(){
        this.ergastApi = new ErgastApiService();
        // this.commands = { 'drivers': getAllDrivers };

    }

    parseSlackCommand(slackRequest) {
        console.log('hit slack parser');

        const { body } = {slackRequest};
        console.log(body);
      
        
        if(slackRequest.body.text == 'drivers')
        {
            return this.getAllDrivers();
        }
    }

    getAllDrivers() {
        console.log('Entered getAllDrivers');
        const drivers = this.ergastApi.getDrivers();
        console.log(drivers);
        return drivers;
    }

}

module.exports = SlackParser;