var ErgastApiService = require('../services/ergastApiService');

class SlackParser {
    constructor(){
        this.ergastApi = new ErgastApiService();
        this.factory = new CommandFactory();
        this.commands = factory.buildCommands();
    }

    parseSlackCommand(slackRequest) {
        console.log('hit slack parser');

        const { body } = slackRequest;
        const executor = this.commands[body.text];
        return executor(body);
    }

    // async getAllDrivers() {
    //     console.log('Entered getAllDrivers');
    //     const drivers = await this.ergastApi.getDrivers();
    //     return drivers;
    // }

}

module.exports = SlackParser;