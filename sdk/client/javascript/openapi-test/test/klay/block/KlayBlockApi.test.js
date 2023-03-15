const Caver = require("caver-javascript");
const {expect} = require("@jest/globals");

let api = new Caver.KlayApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('blockNumber API', () => {
    test('should return the number of most recent block', (done) => {
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        api.blockNumber({}, callbackOne);
    });
});
