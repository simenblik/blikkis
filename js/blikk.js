function randomQuote() {
    var quotes = new Array('Solen skinner alltid på de_dust2', 'Vær deg selv og gi 110%', 'Im a bad boy coming straight from the underground', 'bøBØbø', 'ja ja ja ja ja ja ja');
    var quote = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById('quotechill').innerHTML = 'Dagens visdomsord: ' + quote;
}

function mouseOver() {
    document.getElementById("mains").style.color = "green";
}

function mouseOut() {
    document.getElementById("mains").style.color = "white";
}
var end = new Date('06/24/2017 10:1 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + 'days ';
        document.getElementById('countdown').innerHTML += hours + 'hrs ';
        document.getElementById('countdown').innerHTML += minutes + 'mins ';
        document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);