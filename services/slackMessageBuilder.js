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

            let resultString = `${this.emojifyPosition(result.position)}    ${result.Driver.code}`;
            let finalString = resultString.padEnd(25, ' ') + result.Constructor.name + '\n';
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
                return ':first_place_medal:';
            case '2':
                return ':second_place_medal:';
            case '3':
                return ':third_place_medal:';
            case '4':
                return '  4  ';
            case '5':
                return '  5  ';
            case '6':
                return '  6  ';
            case '7':
                return '  7  ';
            case '8':
                return '  8  ';
            case '9':
                return '  9  ';    
            case '10':
                return '10 ';         
            default:
                return position;
        }
    }
}

module.exports = SlackMessageBuilder;