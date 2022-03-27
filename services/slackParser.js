var CommandFactory = require('../factories/commandFactory');

class SlackParser {
    constructor(){
        this.commands = CommandFactory();
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