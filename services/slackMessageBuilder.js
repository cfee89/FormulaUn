class SlackMessageBuilder {
    constructor() {

    }

    buildDriversListMessage(driversList) {
        let message = {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type":"mrkdwn",
                        "text": driversList
                    }
                }
            ]
        }

        return message;
    }
}

module.exports = SlackMessageBuilder;