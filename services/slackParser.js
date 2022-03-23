var ErgastApiService = require('../services/ergastApiService');

class SlackParser {
    constructor(){
        this.ergastApi = new ErgastApiService();
        // this.commands = { 'drivers': getAllDrivers };

    }

    parseSlackCommand(slackRequest) {
        console.log('hit slack parser');

        const { body } = {slackRequest};
        let commandData = {};
        // commandData.channel = slackRequest.body.channel_id;
        commandData.command = slackRequest.body.text;
        if(commandData.command == 'drivers')
        {
            return this.getAllDrivers();
        }
    }

    getAllDrivers() {
        const drivers = this.ergastApi.getDrivers();
        console.log(drivers);
        return drivers;
    }

}

module.exports = SlackParser;