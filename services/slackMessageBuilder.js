class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let message = {
                    "text": {
                        "type":"mrkdwn",
                        "text": JSON.stringify(driversList)
                    }
                }
        return message;
    }
}

module.exports = SlackMessageBuilder;