var Tutoriel = {};

Tutoriel.start = function () {
	if(localStorage.getItem("tutoriel") == "null" || !localStorage.getItem("tutoriel"))
	{
		localStorage.setItem("tutoriel", true);
		if(appOnDevice_real()) {
			Tutoriel_mobile.start();
		}
		else {
			Tutoriel_navigateur.start();
		}
	}
	
};

Tutoriel.restart = function() {
	if(appOnDevice_real()) {
			Tutoriel_mobile.start();
		}
		else {
			Tutoriel_navigateur.start();
		}
};

scriptLoaded('src/tutoriel/tutoriel.js');
