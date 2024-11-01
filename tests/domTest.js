const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');

chai.use(require('chai-dom'));
require('jsdom-global')();

//initially load the document that will be used for further tests
describe('index.html', () => {
    beforeEach( function () {
        return JSDOM.fromFile("index.html", { runScripts: 'dangerously'})
                .then((dom) => {
                    global.window = dom.window;
                    global.document = dom.window.document;
                });
    })

    describe("check for existing element with id 'temperature'", () => {
        it("element on-off-button should exist", () => {
            const temperatureElement = document.getElementById("temperature");
    
            expect(temperatureElement).to.exist;
        })
    })

    describe("check for event listeners", () => {
        it("should toggle display when on-off-button is clicked", () => {

            const temperatureElement = document.getElementById("temperature");
            const button = document.getElementById("on-off-button");
            
            button.click();
            
            expect(temperatureElement).to.have.text("Temperatur: 21 Celsius");
            
            button.click();

            expect(temperatureElement).to.have.text("");

        });
    });
})