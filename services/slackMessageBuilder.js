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
        let headers = 'Pos'.padEnd(11," ") + 'Driver'.padEnd(13," ") + 'Team\n';
        let resultsString = `*${results.raceName}*\n` + headers;
        
        results.Results.forEach((result)=>{
            let resultString = this.renderRow(result)
            resultsString+=resultString;
        });
        
        console.log("The results string is: " + JSON.stringify(resultsString));
        finalString = '```'+resultsString+'```';
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

    renderRow(result)
    {
        switch(result.position) {
            case '1':
                return ':first_place_medal:'.padEnd(28," ") + result.Driver.code.padEnd(11," ") + result.Constructor.name + '\n';
            case '2':
                return ':second_place_medal:'.padEnd(29," ") + result.Driver.code.padEnd(11," ") + result.Constructor.name + '\n';
            case '3':
                return ':third_place_medal:'.padEnd(28," ") + result.Driver.code.padEnd(11," ") + result.Constructor.name + '\n';
            case '10':
                return '10'.padEnd(12," ") + result.Driver.code.padEnd(11," ") + result.Constructor.name + '\n';
            default:
                return result.position.padEnd(13," ") + result.Driver.code.padEnd(11," ") + result.Constructor.name + '\n';
        }
    }
}

module.exports = SlackMessageBuilder;