var Parameterbox = {}

Parameterbox.state = false;

Parameterbox.start = function(logo) {
	var parameter = document.getElementById("parameter");
	var toggleInfo = document.getElementById("toggleInfo");
	var toggleTuto = document.getElementById("toggleTuto");
	
	parameter.style.width = W/6 + "px";
	parameter.style.height = H/12 + "px";
	parameter.style.left = (margin + logo.getWidth()/4) + "px";
	parameter.style.top = (H - margin - logo.getHeight()/2 - parseFloat(parameter.style.height)) + "px";
	parameter.style.opacity = 0;
	
	toggleInfo.addEventListener("click", function (e) {
		e.preventDefault();
		Parameterbox.hide();
		if(Hoverbox.toggle) {
			Hoverbox.toggle = false;
			toggleInfo.textContent = "Activer les infobulles";
		}
		else {
			Hoverbox.toggle = true;
			toggleInfo.textContent = "Désactiver les infobulles";
		}
	});
	
	toggleTuto.addEventListener("click", function(e) {
		e.preventDefault();
		Tutoriel.restart();
		Parameterbox.hide();
	});
	
	parameter.addEventListener("click", Parameterbox.hide);
};

Parameterbox.show = function() {
	var parameter = document.getElementById("parameter");
	parameter.style.display = 'block';
	Parameterbox.state = true;
	
	parameter.style.opacity = parseFloat(parameter.style.opacity) + 0.1;
	if(parameter.style.opacity < 1) {
		setTimeout(Parameterbox.show, 30);
	}
};

Parameterbox.hide = function() {
	var parameter = document.getElementById("parameter");
	
	parameter.style.opacity = parseFloat(parameter.style.opacity) - 0.1;
	if(parameter.style.opacity > 0) {
		setTimeout(Parameterbox.hide, 20);
	}
	else {
		parameter.style.display = 'none';
		Parameterbox.state = false;
	}
};

Parameterbox.toggle = function() {
	if(Parameterbox.state) {
		Parameterbox.hide();
	}
	else {
		Parameterbox.show();
	}
}

scriptLoaded('src/lib_separation/gui/parameterbox.js');