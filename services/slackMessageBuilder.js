class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let allDrivers = "";
        console.log('slackMessageBuilder - ' + JSON.stringify(driversList));
        
        driversList.forEach((driver)=>{
            console.log(JSON.stringify(driver));
        });
        //    allDrivers.concat(driverString);
        
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