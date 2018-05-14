'use strict';

module.exports = function(Company) {
  Company.myOwnMethod = (cb) => {
    let response = 'Qualquer merda';
    cb(null, response);
  };
  Company.remoteMethod(
    'myOwnMethod', {
      http: {
        path: '/myOwnMethod',
        verb: 'get',
      },
      returns: {
        arg: 'response',
        type: 'string',
      },
    }
  );
};
