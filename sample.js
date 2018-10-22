const openid = require('openid')
      , request = require('superagent');

module.exports.func = function(event,callback) {
  console.log(event)
  test()
  .then((res) => callback(null, res))
  .catch((err) => callback(err))
}

function test() {
  return new Promise((resolve, reject) => {
    get()
    .then((body) => resolve(body))
    .catch((err) => reject(err));
  });
};

function get() {
  return new Promise((resolve, reject) => {
    var url = 'http://www.example.com/users';
    request.get(url).end((err, res)=> {
      if (err) {
        reject(err);
      } else {
        console.log(res.body)
        resolve(res.body);
      };
    });
  });
};
