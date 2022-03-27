var ErgastApiService = require('../services/ergastApiService');

class SlackParser {
    constructor(){
        this.ergastApi = new ErgastApiService();
        // this.commands = { 'drivers': getAllDrivers };

    }

    parseSlackCommand(slackRequest) {
        console.log('hit slack parser');

        const { body } = slackRequest;
      
        if(slackRequest.body.text == 'drivers')
        {
            return this.getAllDrivers();
        }
    }

    async getAllDrivers() {
        console.log('Entered getAllDrivers');
        const drivers = await this.ergastApi.getDrivers();
        console.log('Driverslist is: ' + drivers);
        return drivers;
    }

}

module.exports = SlackParser;