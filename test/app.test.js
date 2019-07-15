const request = require('supertest');
const logger = require('../lib/middleware/logger');
const app = require('../lib/app');

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

  })

  it('POST can return a profile with name and favoriteCharacter', () => {
    return request(app)
      .post('/profiles')
      .send({ name: 'Blast-o', favChar: 'Bender' })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'Blast-o',
          favChar: 'Bender',
          profileQuote: expect.any(String)
        });
      });
  });

  it('can delete an item by index', () => {
    return request(app)
      .delete('/profiles/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Blast-o',
          favChar: 'Bender',
          profileQuote: expect.any(String)
        });
      });
  });


});
