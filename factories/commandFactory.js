var ErgastApiService = require('../services/ergastApiService');

class CommandFactory {
    constructor(){
        this.ergastApi = new ErgastApiService();
    }

    async getAllDrivers() {
        console.log('Entered getAllDrivers');
        const drivers = await this.ergastApi.getDrivers();
        return drivers;
    }

    buildCommands() {
        return { 'drivers': this.getAllDrivers };
    }



}

module.exports = CommandFactory;