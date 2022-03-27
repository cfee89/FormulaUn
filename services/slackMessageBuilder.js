class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        console.log('ENTERED buildDriversListMessage()');
        let allDrivers = "";
        console.log('slackMessageBuilder - ' + JSON.stringify(driversList));
        
        driversList.forEach((driver)=>{
            let driverString = `${driver.permanentNumber} ${driver.code} ${driver.familyName} \n`
            console.log(driverString);
            allDrivers+=driverString;
        });
        
        console.log("The driver string is: " + JSON.stringify(allDrivers));

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

    buildResultsMessage(results) {
        console.log('ENTERED buildResultsMessage()');
        let resultsString = `${results.raceName}\nPosition   Driver   Team\n`;
        
        results.Results.forEach((result)=>{
            let resultString = `${result.position}   ${result.Driver.code}   ${result.Constructor.name} \n`
            console.log(resultString);
            resultsString+=resultString;
        });
        
        console.log("The results string is: " + JSON.stringify(resultsString));

        let message = { 
            "response_type": "in_channel",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type":"mrkdwn",
                        "text": resultsString
                    }
                }
            ]
        }
        return message;
    }
}

module.exports = SlackMessageBuilder;