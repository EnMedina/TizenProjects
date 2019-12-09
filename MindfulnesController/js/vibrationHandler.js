var secondsCounter = localStorage.getItem("countVal");
if( secondsCounter === null ) {secondsCounter = parseInt("0");}
var timerDiv = document.getElementById("count");
var timeIncrease = localStorage.getItem("timeInterval");
if( timeIncrease === null) {timeIncrease = parseInt("15");}
secondsCounter = parseInt(secondsCounter);
timeIncrease = parseInt(timeIncrease);

setInterval(function(){
	
	secondsCounter+= timeIncrease;
	if( secondsCounter%100 === 0 ) {
		secondsCounter = 0;
	}
	timerDiv.innerHTML = secondsCounter;
	localStorage.setItem("countVal", secondsCounter);
	tizen.power.turnScreenOn();
	sleep(1000);
	navigator.vibrate(1000);
}, timeIncrease*1000*60);

function sleep(milliseconds) {
	  const date = Date.now();
	  let currentDate = null;
	  do {
	    currentDate = Date.now();
	  } while (currentDate - date < milliseconds);
	}