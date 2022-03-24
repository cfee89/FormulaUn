class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let message = {
                    "text": {
                        "type":"mrkdwn",
                        "text": driversList
                    }
                }
        return message;
    }
}

module.exports = SlackMessageBuilder;