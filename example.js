

// Add a click event for the search button
document.querySelector("#blue-btn").addEventListener("click", (e) => {
    setBlue();
});
document.querySelector("#green-btn").addEventListener("click", (e) => {
    setGreen();
});
document.querySelector("#purple-btn").addEventListener("click", (e) => {
    setPurple();
});


function setBlue() {
	var eles = document.querySelectorAll('.coloredtext');
	[].forEach.call(eles, function(ele) {

  		ele.style.color = "blue";
  		ele.style.fontFamily = "arial";
	});
	
}

function setGreen() {
	var eles = document.querySelectorAll('.coloredtext');
	[].forEach.call(eles, function(ele) {

  		ele.style.color = "green";
  		ele.style.fontFamily = "Impact,Charcoal,sans-serif";
	});
}

function setPurple() {
	var eles = document.querySelectorAll('.coloredtext');
	[].forEach.call(eles, function(ele) {

  		ele.style.color = "purple";
  		ele.style.fontFamily = "Courier";
	});
}