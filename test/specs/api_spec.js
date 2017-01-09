const assert = require('assert');
const app = require('../../app');
const request = require('supertest');


describe('baby-animals', () => {
  it('200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('200ok', (done) => {

    request(app)
        .get('/babies')
        .expect(200, done);
  });


  it('gets list of baby animals in the response', (done) => {
    request(app)
        .get('/babies')
        .expect(JSON.stringify(['Laika', 'Bruce', 'Sir Hopsalot']))
        .end((error)=>{
          if(error) throw error;
          done();
        })
  });

  it('returns json as content type', (done) => {
    request(app)
        .get('/babies')
        .expect('Content-Type', /json/)
        .end((error) => {
          if(error) throw error;
          done();
        })
  });

  it('returns an html page', (done) => {
    request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .end((error)=>{
          if(error) throw error;
          done();
        });
  });


});