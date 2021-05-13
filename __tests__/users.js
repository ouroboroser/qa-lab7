const request = require('supertest');
const config = require('../config');

describe('users tests', () => {
  test('it should return al5555555555l users', (done) => {
    request(config.BASE_URL)
      .get(config.GET_USERS)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });

  test('it should return one user ', (done) => {
    request(config.BASE_URL)
      .get(config.GET_ONE_USER)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });

  test('it should created new user', (done) => {
    request(config.BASE_URL)
      .post(config.CREATE_USER)
      .send(config.USER)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });

  test('it should return error', (done) => {
    request(config.BASE_URL)
      .post(config.CREATE_USER)
      .send(config.USER)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });
});

describe('books tests', () => {
  test('it should return all books', (done) => {
    request(config.BASE_URL)
      .get(config.GET_BOOKS)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });

  test('it should return books available', (done) => {
    request(config.BASE_URL)
      .get(config.GET_AVAILABILITY_BOOKS)
      .query({ availability: true })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });

  test('it should update book available', (done) => {
    request(config.BASE_URL)
      .put(config.UPDATE_AVAILABILITY_BOOK)
      .send(config.BOOK)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });
});

describe('orders tests', () => {
  test('it should return active orders', (done) => {
    request(config.BASE_URL)
      .get(config.GET_ORDERS)
      .query({ active: true })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body);
        console.log(res.body);
        done();
      });
  });
});
