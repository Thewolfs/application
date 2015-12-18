var Tutoriel_navigateur = {};

Tutoriel_navigateur.state = null;

Tutoriel_navigateur.changeEllipse = function (cx, cy, rx, ry) {
	var ellipse = document.getElementById("ellipseTuto");
	
	ellipse.setAttribute("cx", cx + "px");
	ellipse.setAttribute("cy", cy + "px");
	ellipse.setAttribute("rx", rx + "px");
	ellipse.setAttribute("ry", ry + "px");
}

Tutoriel_navigateur.changeText = function (text, top, left) {
	var textBox = document.getElementById("textTuto");	
	
	textBox.innerHTML = text;
	
	textBox.style.top = (top - textBox.clientHeight/2) + "px";
	textBox.style.left = (left - textBox.clientWidth/2) + "px";
}

Tutoriel_navigateur.start = function () {
	var tutoLayer = document.getElementById("tutoriel");
	
	tutoLayer.style.display = "block";
	tutoLayer.style.height = H + "px";
	tutoLayer.style.width = W + "px";
	tutoLayer.children[1].addEventListener("click", function (e) {
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
	
	Tutoriel_navigateur.changeText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget congue justo, sed venenatis felis. Sed felis ante, scelerisque in mollis in, feugiat at lectus. Suspendisse egestas dapibus quam, vitae aliquet erat. Quisque in eros mattis, semper urna vel, sagittis tellus. Sed dictum placerat massa eu fringilla. Vivamus neque nisl, molestie non ornare nec, maximus sit amet orci. Nunc ultricies posuere porttitor. Phasellus tempor, erat vitae ultricies tincidunt, velit diam ullamcorper mi, a efficitur quam nulla et neque. Morbi non augue nec arcu suscipit viverra mattis nec ex. Cras quis enim mauris. In a nisi id nibh molestie fringilla et sed risus. Praesent magna risus, euismod ac pulvinar et, iaculis eget diam. Nunc id egestas ex, id varius justo. Vestibulum porta tristique porttitor. Suspendisse potenti. Donec feugiat vulputate mi pretium varius.", H/4, W*4/5);
	
	Tutoriel_navigateur.changeEllipse(Menu.words['labo'].getCenterX(), Menu.words['labo'].getCenterY(), Menu.words['labo'].getWidth()/2 + 20, Menu.words['labo'].getHeight()/2 + 20);
}

scriptLoaded('src/tutoriel/navigateur/navigateur.js');
