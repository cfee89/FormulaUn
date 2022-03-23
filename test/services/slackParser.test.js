
const ErgastApiService = require('../../services/ergastApiService');
var SlackParser = require('../../services/slackParser');
jest.mock('../../services/ergastApiService');


test('GivenValidRequest_WhenDriversCommandReceived_ReturnDrivers', () => {
    const expectedCommandText = 'drivers';
    const expectedRequest = {
            body: {
                text: expectedCommandText
    }};
    const expectedDriversList = [{permanentNumber: 55, code: 'SAI'}];
    const slackParser = new SlackParser();
    slackParser.parseSlackCommand(expectedRequest);
    const mockGetDrivers = ErgastApiService.mock.instances[0].getDrivers;
    expect(mockGetDrivers).toHaveBeenCalled();
    
})


