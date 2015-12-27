var Tutoriel_navigateur = {};

Tutoriel_navigateur.state = null;

Tutoriel_navigateur.listState = ['menu', 'inputWord', 'choixMot'];
Tutoriel_navigateur.currentState = "";

Tutoriel_navigateur.ellipse = {};
Tutoriel_navigateur.arrow = {};
Tutoriel_navigateur.textBox = {};

Tutoriel_navigateur.loadAssets = function () {
	Tutoriel_navigateur.ellipse = document.getElementById("ellipseTuto");
	Tutoriel_navigateur.arrow = document.getElementById("arrow");
	Tutoriel_navigateur.textBox = document.getElementById("textTuto");
	Tutoriel_navigateur.tutoLayer = document.getElementById("tutoriel");
}

Tutoriel_navigateur.changeEllipse = function (cx, cy, rx, ry) {
	Tutoriel_navigateur.ellipse.setAttribute("cx", cx + "px");
	Tutoriel_navigateur.ellipse.setAttribute("cy", cy + "px");
	Tutoriel_navigateur.ellipse.setAttribute("rx", rx + "px");
	Tutoriel_navigateur.ellipse.setAttribute("ry", ry + "px");
}

Tutoriel_navigateur.changeArrow = function(svg) {
	Tutoriel_navigateur.arrow.setAttribute("d", svg);
}

Tutoriel_navigateur.changeText = function (text, top, left, align) {	
	Tutoriel_navigateur.textBox.innerHTML = text;
	
	Tutoriel_navigateur.textBox.setAttribute("y", top);
	Tutoriel_navigateur.textBox.setAttribute("x", left);
	
	Tutoriel_navigateur.textBox.setAttribute("text-anchor", align)
}

Tutoriel_navigateur.start = function () {	
	Tutoriel_navigateur.tutoLayer.style.display = "block";
	Tutoriel_navigateur.tutoLayer.children[1].addEventListener("click", function (e) {
		e.preventDefault();
		Tutoriel_navigateur.cancel();
	});
	
	Hoverbox.toggle = false;
	
	Tutoriel_navigateur.event = document.createEvent('Event');
	Tutoriel_navigateur.event.initEvent("tutoriel", true, true);
	
	canvas.addEventListener("tutoriel", Tutoriel_navigateur.next);
	Tutoriel_navigateur.currentState = "menu";
	Tutoriel_navigateur.menu();
};

Tutoriel_navigateur.cancel = function () {	
	Tutoriel_navigateur.tutoLayer.style.display = "none";
	
	Hoverbox.toggle = true;
	
	Tutoriel_navigateur.state = null;
}

Tutoriel_navigateur.next = function () {
	if((Tutoriel_navigateur.listState.indexOf(Tutoriel_navigateur.currentState) + 1) == Tutoriel_navigateur.listState.length) {
		Tutoriel_navigateur.currentState = Tutoriel_navigateur.listState[0];
	}
	else {
		Tutoriel_navigateur.currentState = Tutoriel_navigateur.listState[Tutoriel_navigateur.listState.indexOf(Tutoriel_navigateur.currentState) + 1];
	}
	console.log(Tutoriel_navigateur.currentState);
	window["Tutoriel_navigateur"][Tutoriel_navigateur.currentState]();
}

Tutoriel_navigateur.menu = function () {
	Tutoriel_navigateur.state = 'Menu.labo';	
	
	Tutoriel_navigateur.changeText("Cliquez ici pour commencer !", 700, 960, "middle");
	
	Tutoriel_navigateur.changeEllipse(320, 540, Menu.words['labo'].getWidth()*1920/(W*2) + 20, Menu.words['labo'].getHeight()*1080/(H*2) + 20);
	
	Tutoriel_navigateur.changeArrow("m " + 600 + "," + 685 + " c -0.2817,-2.37452 -0.45969,-2.41888 -14.55596,-3.6277 -50.92868,-4.36736 -91.19202,-18.93426 -117.74503,-42.59907 l -6.05533,-5.3967 6.9157,-0.53936 c 8.67296,-0.67641 17.96707,-3.42537 18.63959,-5.51311 1.01881,-3.16271 -0.9784,-3.58312 -8.11798,-1.70881 -7.17204,1.88282 -19.15069,2.39742 -23.96274,1.02943 l -2.72824,-0.7756 0,11.57599 c 0,13.80232 1.68243,20.46876 6.77529,26.84633 2.74034,3.43162 3.46653,3.88315 4.5394,2.82247 1.70991,-1.69049 1.63101,-2.22018 -0.83592,-5.61225 -4.0967,-5.63303 -7.12094,-16.04718 -7.12094,-24.52141 0,-2.82418 0.0439,-2.80067 6.66927,3.57126 26.97528,25.94335 75.59179,43.93221 124.99103,46.24863 l 12.87704,0.60382 -0.28518,-2.40392 z");
}

Tutoriel_navigateur.inputWord = function () {
	Tutoriel_navigateur.state = 'word_valid';		
	
	Tutoriel_navigateur.tutoLayer.style.display = "none";
}

Tutoriel_navigateur.choixMot = function () {
	var ellipseArrow1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	var ellipseArrow2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	var mask = document.getElementById("tutoMask");
	
	ellipseArrow1.setAttribute("cx", 1888 - gui.labo_button_up.getWidth()*1920/(2*W) + "px");
	ellipseArrow1.setAttribute("cy", 32 + gui.labo_button_up.getHeight()*1080/(2*H) + "px");
	ellipseArrow1.setAttribute("rx", gui.labo_button_up.getWidth()*1920/(2*W) + 10 + "px");
	ellipseArrow1.setAttribute("ry", gui.labo_button_up.getHeight()*1080/(2*H) + 10 + "px");
	ellipseArrow1.style.fill = "black";
	
	ellipseArrow2.setAttribute("cx", 1888 - gui.labo_button_down.getWidth()*1920/(2*W) + "px");
	ellipseArrow2.setAttribute("cy", 1048 - gui.labo_button_down.getHeight()*1080/(2*H) + "px");
	ellipseArrow2.setAttribute("rx", gui.labo_button_down.getWidth()*1920/(2*W) + 10 + "px");
	ellipseArrow2.setAttribute("ry", gui.labo_button_down.getHeight()*1080/(2*H) + 10 + "px");
	ellipseArrow2.style.fill = "black";
	
	mask.appendChild(ellipseArrow1);
	mask.appendChild(ellipseArrow2);
	
	Tutoriel_navigateur.state = "labo_button_down";
	
	Tutoriel_navigateur.tutoLayer.style.display = "block";
	
	Tutoriel_navigateur.changeText("<tspan>Choississez un mot à</tspan><tspan x='200' dy='62'>combiner avec le précédent</tspan>", 200, 200, "left");
	
	Tutoriel_navigateur.changeEllipse(1280, 540, 450 ,500);
}

scriptLoaded('src/tutoriel/navigateur/navigateur.js');
