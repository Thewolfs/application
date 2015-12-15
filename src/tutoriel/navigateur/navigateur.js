var Tutoriel_navigateur = {};

Tutoriel_navigateur.state = null;

Tutoriel_navigateur.start = function () {
	var tutoLayer = document.getElementById("tutoriel");
	
	tutoLayer.style.display = "block";
	tutoLayer.style.height = H + "px";
	tutoLayer.style.width = W + "px";
	tutoLayer.children[0].addEventListener("click", function () {
		e.preventDefault();
		Tutoriel_navigateur.cancel();
	});
	console.log(tutoLayer.children[0]);
	
	Hoverbox.toggle = false;
	
	Tutoriel_navigateur.state = 'Menu.labo';
};

Tutoriel_navigateur.cancel = function () {
	var tutoLayer = document.getElementById("tutoriel");
	
	tutoLayer.style.display = "none";
	
	Hoverbox.toggle = true;
	
	Tutoriel_navigateur.state = null;
}

scriptLoaded('src/tutoriel/navigateur/navigateur.js');
