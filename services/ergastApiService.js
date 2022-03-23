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
}



module.exports = ErgastApiService;
