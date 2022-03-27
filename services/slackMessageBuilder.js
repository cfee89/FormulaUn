class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let allDrivers = '';
        for(let driver in driversList) {
            let driverString = `${driver.permanentNumber} ${driver.code} ${driver.familyName} \n`;
            allDrivers.append(driverString);
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
        
        console.log('Drivers message is: ' + message);
        return message;
    }
}

module.exports = SlackMessageBuilder;