var ErgastApiService = require('../services/ergastApiService');

const  CommandFactory = () => {
    const ergastApi = new ErgastApiService();

    async function getAllDrivers() {
        console.log('Entered getAllDrivers');
        const drivers = await ergastApi.getDrivers();
        return drivers;
    }

    return { 'drivers': getAllDrivers };
}

module.exports = CommandFactory;