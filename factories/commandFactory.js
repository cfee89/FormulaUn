var ErgastApiService = require('../services/ergastApiService');

class CommandFactory {
    constructor(){
        ergastApi = new ErgastApiService();
    }

    async getAllDrivers() {
        console.log('Entered getAllDrivers');
        const drivers = await ergastApi.getDrivers();
        return drivers;
    }

    buildCommands() {
        return { 'drivers': this.getAllDrivers };
    }



}

module.exports = CommandFactory;