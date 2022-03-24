class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let message = {
                'response_type': 'in_channel',
                "text": {
                    "type":"mrkdwn",
                    "text": JSON.stringify(driversList)
                }
            }
        return message;
    }
}

module.exports = SlackMessageBuilder;