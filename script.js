var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body.style.background);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	
}

color1.addEventListener("input", function() {
	console.log(color1.value)
})

color2.addEventListener("input", function() {
	console.log(color2.value)
})


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var ala = window.getComputedStyle(body).getPropertyValue("background");

// console.log(ala.textContent);

// console.log(body.style.cssText);

// body.style.background
// 'linear-gradient(to right, rgb(0, 255, 0), rgb(192, 155, 155))'
// body.style.cssText
// 'background: linear-gradient(to right, rgb(0, 255, 0), rgb(192, 155, 155));'