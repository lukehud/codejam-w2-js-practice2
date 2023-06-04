let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    setHours: function(h) {this.hours = h;},
    setMinutes: function(m) {this.minutes = m;},
    setSeconds: function(s) {this.seconds = s;}
};

let now = new Date()
clock.setHours(now.getHours());
clock.setMinutes(now.getMinutes());
clock.setSeconds(now.getSeconds());
console.log(clock)

function formatTime(time) {
    return time < 10 ? '0' + time: time;
    // return the time in a format of the first two digits. "10" sets time to the tens place. "?" is an if statement, so if '0' add time. ":" is the else statement. So if it's not zero, return the time as-is.
}

//Intervals
setInterval(function() {
    clock.seconds++;
    if (clock.seconds === 60) {
        clock.seconds = 0;
        clock.minutes++;
    }
    if (clock.minutes ===60) {
        clock.minutes = 0;
        clock.hours++;
    }
    if (clock.hours === 24) {
        clock.hours = 0;
    }
    document.getElementById('clock').innerHTML = formatTime(clock.hours) + ":" + formatTime(clock.minutes) + ":" + formatTime(clock.seconds);
}, 1000 /*this value is in milliseconds, so 1000 sets how often it's incrementing the interval. By setting it to 1000, we've just set it to actuate our interval settings once every second*/);

document.getElementById('remove').onclick = function () {
    let element = document.getElementById('clock')
    element.parentNode.removeChild(element);
}

let clockElement = document.querySelector('#clock');

document.getElementById('reset').onclick = function () {
    clock.hours = 0;
    clock.minutes = 0;
    clock.seconds = 0;
}