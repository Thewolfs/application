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
	
	Hoverbox.toggle = false;
	
	Tutoriel_navigateur.menu();
};

Tutoriel_navigateur.cancel = function () {
	var tutoLayer = document.getElementById("tutoriel");
	
	tutoLayer.style.display = "none";
	
	Hoverbox.toggle = true;
	
	Tutoriel_navigateur.state = null;
}

Tutoriel_navigateur.menu = function () {
	Tutoriel_navigateur.state = 'Menu.labo';
	
	var textBox = document.getElementById("textTuto");	
	var ellipse = document.getElementById("ellipseTuto");
	
	ellipse.setAttribute("cx", Menu.words['labo'].getCenterX() + "px");
	ellipse.setAttribute("cy", Menu.words['labo'].getCenterY() + "px");
	ellipse.setAttribute("rx", Menu.words['labo'].getWidth()/2 + 20 + "px");
	ellipse.setAttribute("ry", Menu.words['labo'].getHeight()/2 + 10 + "px");
	
	textBox.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget congue justo, sed venenatis felis. Sed felis ante, scelerisque in mollis in, feugiat at lectus. Suspendisse egestas dapibus quam, vitae aliquet erat. Quisque in eros mattis, semper urna vel, sagittis tellus. Sed dictum placerat massa eu fringilla. Vivamus neque nisl, molestie non ornare nec, maximus sit amet orci. Nunc ultricies posuere porttitor. Phasellus tempor, erat vitae ultricies tincidunt, velit diam ullamcorper mi, a efficitur quam nulla et neque. Morbi non augue nec arcu suscipit viverra mattis nec ex. Cras quis enim mauris. In a nisi id nibh molestie fringilla et sed risus. Praesent magna risus, euismod ac pulvinar et, iaculis eget diam. Nunc id egestas ex, id varius justo. Vestibulum porta tristique porttitor. Suspendisse potenti. Donec feugiat vulputate mi pretium varius.";
	
	textBox.style.top = (H/4 - textBox.clientHeight/2) + "px";
	textBox.style.left = (3*W/4 - textBox.clientWidth/2) + "px";
}

scriptLoaded('src/tutoriel/navigateur/navigateur.js');
