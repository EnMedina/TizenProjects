// locate your element and add the Click Event Listener
document.getElementById("parent-list").addEventListener("click",function(e) {
	// e.target is our targetted element.
    console.log(e.target.nodeName);
	if(e.target && e.target.nodeName === "LI") {
		alert("Setting vibration for " + e.target.id + " minutes");
		localStorage.setItem("timeInterval", e.target.id);
		location.assign("../index.html");
	}
});