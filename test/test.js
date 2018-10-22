const nock = require('nock')
      , assert = require('power-assert')
      , dest = require('../sample.js')
      , url = 'http://www.example.com';


beforeEach(function (done) {
  // 処理なし
  done();
});

afterEach(function (done) {
  nock.cleanAll();
  nock.disableNetConnect();
  done();
});

describe('mock test', ()=> {
  it('Get: mock res ok', (done)=> {
    var path = '/users';
    nock(url)
    .get(path)
    .reply(200, {
      isMock: true,
    });
    dest.func('aaaa',(err, res)=> {
      assert(err === null);
      assert(res.isMock === true);
      done();
    });
  });
});
