const Caver = require("caver-javascript");
const {expect} = require("@jest/globals");

let api = new Caver.KlayApi(new Caver.ApiClient("http://localhost:7151"));

describe('Klay getRewards API', () => {
    test('should return info of a block number', (done) => {
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        api.getRewards(1, {}, callbackOne);
    });
});
