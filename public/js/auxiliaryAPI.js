exports.celsiusToFahrenheit = function (celsius){
    let retVal = null;

    if(typeof celsius === 'number')
        retVal =  celsius*(9/5)+32

    return retVal;
}

exports.fahrenheitToCelcius = function (fahrenheit){
    let retVal = null;

    if(typeof fahrenheit === 'number')
        retVal = (fahrenheit-32)/(9/5);

    return retVal;
}

exports.getGreetingDependOnTime =  function (myDate) {
    const timeMorginBegin = '06:00';
    const timeMorningEnd = '12:00';
    const timeDayEnd = '17:00';

    const dateMorningBegin = new Date('2020-01-01 ' + timeMorginBegin);
    const dateMorningEnd = new Date('2020-01-01 ' + timeMorningEnd);

    const dateDayEnd = new Date('2020-01-01 ' + timeDayEnd);

    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    let retVal = "Guten Abend";

    if(dateCurrent.getTime() >= dateMorningBegin.getTime() && dateCurrent.getTime() <= dateMorningEnd.getTime())
        retVal = "Guten Morgen";

    if(dateCurrent.getTime() >= dateMorningEnd.getTime() && dateCurrent.getTime() <= dateDayEnd.getTime())
        retVal = "Guten Tag";

    return retVal;
}