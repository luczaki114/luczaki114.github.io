
// To update the time for a new event change the variable below!
// Add the year, month, day, hour, minute, second in that order. 
// You don't need to use all the fields, but you cannot skip any fields.
// Months start at 0 and go to 11. So January is 0 and December is 11.
// Hours are in military time. 00 = 12am and 23 = 11pm.
var startDate = new Date(2015, 1, 5);

var updateTime = function () {
    var timeToEvent = countdown(startDate);

    var numberOfYears = timeToEvent.years, numberOfMonths = timeToEvent.months, numberOfDays = timeToEvent.days, numberOfHours = timeToEvent.hours, numberOfMinutes = timeToEvent.minutes, numberOfSeconds = timeToEvent.seconds;

    var parseNumber = function (number) {
        if (number.toString().length < 2 ) {
            number = "0" + number;
        }
        return number;
    }

    document.querySelector(".number-of-years").innerHTML = parseNumber(numberOfYears);
    document.querySelector(".number-of-months").innerHTML = parseNumber(numberOfMonths);
    document.querySelector(".number-of-days").innerHTML = parseNumber(numberOfDays);
    document.querySelector(".number-of-hours").innerHTML = parseNumber(numberOfHours);
    document.querySelector(".number-of-minutes").innerHTML = parseNumber(numberOfMinutes);
    document.querySelector(".number-of-seconds").innerHTML = parseNumber(numberOfSeconds);
}

updateTime()
setInterval(function () {
    updateTime();
}, 1000)
    