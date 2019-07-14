const logger = require('../lib/middleware/logger');

describe('logger middleware', () => {
  it('console.log the request method and path', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();

    const req = {
      method: 'GET',
      path: '/test'
    };

    const next = jest.fn();

    logger(req, {}, next);

    expect(next).toHaveBeenCalled();
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledWith('GET /test');

  });
});
