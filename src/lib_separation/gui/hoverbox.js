/*
	class Hoverbox
*/

var Hoverbox = {};

Hoverbox.toggle = true

Hoverbox.display = function (event, title, message) {
	if(!Hoverbox.toggle) {
		return;
	}
	var position = {
		x: event.clientX,
		y: event.clientY,
	};
	
	var hoverbox = document.getElementById("hoverbox");
	var hovertitle = document.getElementById("hovertitle");
	var hovertext = hoverbox.children[1];
	
	if (canvas.height >= (position.y+10) + hoverbox.offsetHeight)
		hoverbox.style.top = (position.y+10) + "px";
	else
		hoverbox.style.top = (canvas.height - hoverbox.offsetHeight) + "px";
	
	if (canvas.width >= (position.x+10) + hoverbox.offsetWidth)
		hoverbox.style.left = (position.x+10) + "px";
	else
		hoverbox.style.left = (canvas.width - hoverbox.offsetWidth) + "px";
	
	if(title != null)
		hovertitle.textContent = title;
	hovertext.textContent = message;
	
	hoverbox.style.display = "block";
}

Hoverbox.hide = function () {
	if(!Hoverbox.toggle) {
		return;
	}
	var hoverbox = document.getElementById("hoverbox");
	var hovertitle = document.getElementById("hovertitle");
	var hovertext = hoverbox.children[1];
	
	hoverbox.style.display = "none";
	
	hoverbox.style.top = "0";
	hoverbox.style.left = "0";
	
	hovertitle.textContent = "";
	hovertext.textContent = "";
}

scriptLoaded('src/gui/hover.js');
