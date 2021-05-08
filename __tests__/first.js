const request = require('supertest');

describe('get posts', () => {
  test('it should return all post', (done) => {
    request('https://my-json-server.typicode.com/ouroboroser/testing-api')
      .get('/posts')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });

  test('responds with json', (done) => {
    request('https://my-json-server.typicode.com/ouroboroser/testing-api')
      .post('/profile')
      .send({ name: 'john' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res);
        done();
      });
  });
});
