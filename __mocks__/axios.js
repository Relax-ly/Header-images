// this mock is use for testing, mocking calls
// when calling jest.mock('axios'), axios is replaced with this mock

'use strict';

module.exports = {
  get: () => {
    return Promise.resolve({
      data: [{
        _id: 1,
        images: [{
          url: 'mock url',
          description: 'mock description'
        }]
      }]
    });
  }
};
