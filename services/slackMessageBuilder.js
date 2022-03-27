class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let allDrivers = "";
        console.log('slackMessageBuilder - ' + driversList);
        for(let driver in driversList) {
            let driverString = `${driver["permanentNumber"]} ${driver["code"]} ${driver["familyName"]} \n`;
            console.log(driverString);
            allDrivers.concat(driverString);
        }
        console.log("The driver string is: " + allDrivers);

        let message = { 
            "response_type": "in_channel",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type":"mrkdwn",
                        "text": allDrivers
                    }
                }
            ]
        }
        return message;
    }
}

module.exports = SlackMessageBuilder;