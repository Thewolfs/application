var Tutoriel_navigateur = {};

Tutoriel_navigateur.start = function () {
	var tutoLayer = document.getElementById("tutoriel");
	
	tutoLayer.style.display = "block";
	tutoLayer.style.height = H + "px";
	tutoLayer.style.width = W + "px";
};

scriptLoaded('src/tutoriel/navigateur/navigateur.js');
