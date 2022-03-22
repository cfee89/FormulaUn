const axios = require('axios');


async function getDrivers() {
    try {
        const response = await axios.get('https://ergast.com/api/f1/current/drivers.json');
        const drivers = response.data.MRData.DriverTable;
        return drivers;
    } catch (error) {
        console.error(error);
    }


}

module.exports = getDrivers;
