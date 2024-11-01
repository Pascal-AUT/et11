const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

describe("fahrenheitToCelsius()", function() {
    it('test below 32', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)
    }),
    it('test above 32', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(38)*10)/10).to.equal(3.3)
    }),
    it('test equals 32', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelcius(32)*10)/10).to.equal(0)
    }),
    it('test no integer value', function() {
        expect(apiTemperature.celsiusToFahrenheit("xyz")).to.equal(null)
    })
});

describe("celsiusToFahrenheit()", function() {
    it('test below 0', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-10)*10)/10).to.equal(14)
    }),
    it('test above 0', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(10)*10)/10).to.equal(50)
    }),
    it('test equals 0', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(0)*10)/10).to.equal(32)
    }),
    it('test no integer value', function() {
        expect(apiTemperature.celsiusToFahrenheit("asd")).to.equal(null)
    })
});

describe("getGreetingDependOnTime()", function() {
    it('test morning', function() {
        expect(apiTemperature.getGreetingDependOnTime(new Date("2024-11-01 06:20"))).to.equal("Guten Morgen")
    }),
    it('test day', function() {
        expect(apiTemperature.getGreetingDependOnTime(new Date("2024-11-01 15:00"))).to.equal("Guten Tag")
    }),
    it('test evening', function() {
        expect(apiTemperature.getGreetingDependOnTime(new Date("2024-11-01 18:50"))).to.equal("Guten Abend")
    }),
    it('test midnight', function() {
        expect(apiTemperature.getGreetingDependOnTime(new Date("2024-11-01 00:00"))).to.equal("Guten Abend")
    })
});