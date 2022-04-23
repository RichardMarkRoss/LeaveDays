let assert = require('assert');
let tester = require('../settings');

const settings = tester();

describe('test input username name', function () {

    assert.equal("Richard", settings.loging("Richard"));

});