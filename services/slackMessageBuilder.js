class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let allDrivers = '';
        for(let driver in driversList) {
            let driverString = `${driver.permanentNumber} ${driver.code} ${driver.familyName} \n`;
            allDrivers.concat(driverString);
        }
        
        let message = { 
            'response_type': 'in_channel',
            'blocks': [
                {
                    "text": {
                        "type":"mrkdwn",
                        "text": allDrivers
                    }
                }
            ]
        }
        let jsonMessage = JSON.stringify(message);
        console.log('Drivers message is: ' + jsonMessage);
        return jsonMessage;
    }
}

module.exports = SlackMessageBuilder;