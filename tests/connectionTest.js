const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');

chai.should();

describe('GET /', function() {
    it("test retrieving index.html", function(done) {
        supertest(server)
        .get('/')
        .expect(200, done);    
    })
})

describe('GET /api/norealroute', function() {
    it("test fallback if route does not exist", function(done) {
        supertest(server)
        .get('/api/norealroute')
        .expect(200, done);    
    })
})

describe('POST /api/fromCelsiusToFahrenheit', function() {
    it("test if status 200 and the correct response is returned", function(done) {
        supertest(server)
        .post('/api/fromCelsiusToFahrenheit')
        .send({'temperature': 0})
        .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('result', 32);
        });
           
        done(); 
    })
})

describe('POST /api/fromFahrheitToCelsius', function() {
    it("test if status 200 and the correct response is returned", function(done) {
        supertest(server)
        .post('/api/fromFahrheitToCelsius')
        .send({'temperature': 32})
        .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('result', 0);
        });

        done();   
    })
})