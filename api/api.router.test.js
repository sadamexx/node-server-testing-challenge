const server = require('../server.js');
const request = require("supertest");

describe('api router', () => {
    test('should run the tests', () => {
        expect(true).toBe(true);
    });    

    describe('get on api router', () => {
        test('should return 200 ok', () => {
            return request(server)
            .get('/api')
            .then(res => {
                expect(res.status).toBe(200);
            });
        })
    })
    
    describe('get on api router', () => {
        test('should return 200 ok', () => {
            return request(server)
            .get('/api')
            .then(res => {
                expect(res.body).toBe("Api router sucks");
            });
        })
    })  

});