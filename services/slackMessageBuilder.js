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
        let headers = 'Pos'.padEnd(15," ") + 'Driver'.padEnd(20," ") + 'Team\n';
        let resultsString = `*${results.raceName}*\n` + headers;
        
        results.Results.forEach((result)=>{

            let resultString = `${this.emojifyPosition(result.position)}    ${result.Driver.code}`;
            let finalString = resultString.padEnd(20, ' ') + result.Constructor.name + '\n';
            console.log(finalString);
            resultsString+=finalString;
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

    emojifyPosition(position)
    {
        switch(position) {
            case '1':
                return ':first_place_medal:'.padEnd(25," ");
            case '2':
                return ':second_place_medal:'.padEnd(26," ");
            case '3':
                return ':third_place_medal:'.padEnd(25," ");
            case '10':
                return '10'.padEnd(19," ");
            default:
                return position.padEnd(20," ");
        }
    }
}

module.exports = SlackMessageBuilder;