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
        let resultsString = `*${results.raceName}*\nPos   Driver   Team\n`;
        
        results.Results.forEach((result)=>{

            let resultString = `${this.emojifyPosition(result.position)}`;
            let stringWithDriver = resultString.slice(6,6) + result.Driver.code;
            let finalResult = stringWithDriver.slice(15,15) + result.Constructor.name + '\n'
            console.log(finalResult);
            resultsString+=finalResult;
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
                return ':first_place_medal:';
            case '2':
                return ':second_place_medal:';
            case '3':
                return ':third_place_medal:';
            default:
                return position;
        }
    }
}

module.exports = SlackMessageBuilder;