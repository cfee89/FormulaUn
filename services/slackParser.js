var ergastApiService = require('../services/ergastApiService');

class SlackParser {
    constructor(){
        // this.commands = { 'drivers': getAllDrivers };

    }

    parseSlackCommand(slackRequest) {
        console.log('hit slack parser');
        
        let { body: commandData } = {slackRequest};
        commandData.channel = slackRequest.body.channel_id;
        commandData.command = slackRequest.body.text;
        if(text === 'driver')
        {
            this.getAllDrivers();
        }
    }

    getAllDrivers() {
        drivers = ergastApiService.getDrivers();
        console.log(drivers);
    }

}

module.exports = new SlackParser();