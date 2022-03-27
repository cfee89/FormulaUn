const axios = require('axios');


class ErgastApiService {
    constructor(){

    }

    async getDrivers() {
        console.log('Entered ErgastApiService::getDrivers');
        try {
            const response = await axios.get('https://ergast.com/api/f1/current/drivers.json');
            const drivers = response.data.MRData.DriverTable.Drivers.map(({driverId, url, ...keepAttrs}) => keepAttrs)
            return drivers;
        } catch (error) {
            console.error(error);
        }
    }

    async getLastRaceResults() {
        console.log('Entered ErgastApiService::getLastRaceResults');
        try {
            const response = await axios.get('https://ergast.com/api/f1/current/results.json');
            console.log(response);
            const results = response.data.MRData.RaceTable.Races.pop();
            console.log(JSON.stringify(results));
            return results;
        } catch (error) {
            console.error(error);
        }
    }
}



module.exports = ErgastApiService;
