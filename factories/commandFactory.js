var ErgastApiService = require('../services/ergastApiService');
var SlackMessageBuilder = require('../services/slackMessageBuilder');

const  CommandFactory = () => {
    const ergastApi = new ErgastApiService();
    const slackMessageBuilder = new SlackMessageBuilder();

    async function getAllDrivers() {
        console.log('Entered getAllDrivers');
        const drivers = await ergastApi.getDrivers();
        const message = slackMessageBuilder.buildDriversListMessage(drivers);
        return message;
    }

    async function getLastRaceResults() {
        console.log('Entered getLastRaceResults');
        const results = await ergastApi.getLastRaceResults();
        message = slackMessageBuilder.buildDriversListMessage(results);
        return message;
    }

    return { 'drivers': getAllDrivers,
             'results': getLastRaceResults };
}

module.exports = CommandFactory;