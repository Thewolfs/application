var Tutoriel_navigateur = {};

Tutoriel_navigateur.state = null;

Tutoriel_navigateur.listState = [
	'menu', 
	'inputWord', 
	'choixMot', 
	'transformation', 
	'geste', 
	'editeur', 
	'addMot', 
	'chooseWordType', 
	'chooseWord', 
	'endTuto',
	];
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

Tutoriel_navigateur.show = function () {
	Tutoriel_navigateur.tutoLayer.style.display = 'block';
	
	Tutoriel_navigateur.tutoLayer.style.opacity = parseFloat(Tutoriel_navigateur.tutoLayer.style.opacity) + 0.1
	if(Tutoriel_navigateur.tutoLayer.style.opacity < 1) {
		setTimeout(Tutoriel_navigateur.show, 15);
	}
}

Tutoriel_navigateur.hide = function () {
	Tutoriel_navigateur.tutoLayer.style.opacity = parseFloat(Tutoriel_navigateur.tutoLayer.style.opacity) - 0.1
	if(Tutoriel_navigateur.tutoLayer.style.opacity > 0) {
		setTimeout(Tutoriel_navigateur.hide, 10);
	}
	else {
		Tutoriel_navigateur.tutoLayer.style.display = 'none'
	}
	
}

Tutoriel_navigateur.start = function () {	
	Tutoriel_navigateur.tutoLayer.style.opacity = 0;
	Tutoriel_navigateur.show();
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
	Tutoriel_navigateur.hide();
	
	Hoverbox.toggle = true;
	
	Tutoriel_navigateur.state = null;
	
	Tutoriel_navigateur.currentState = "";
}

Tutoriel_navigateur.next = function () {
	if((Tutoriel_navigateur.listState.indexOf(Tutoriel_navigateur.currentState) + 1) == Tutoriel_navigateur.listState.length) {
		Tutoriel_navigateur.currentState = Tutoriel_navigateur.listState[0];
	}
	else {
		Tutoriel_navigateur.currentState = Tutoriel_navigateur.listState[Tutoriel_navigateur.listState.indexOf(Tutoriel_navigateur.currentState) + 1];
	}
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
	
	Tutoriel_navigateur.hide();
}

Tutoriel_navigateur.choixMot = function () {
	Tutoriel_navigateur.ellipseArrow1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	Tutoriel_navigateur.ellipseArrow2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	Tutoriel_navigateur.mask = document.getElementById("tutoMask");
	
	Tutoriel_navigateur.ellipseArrow1.setAttribute("cx", 1888 - gui.labo_button_up.getWidth()*1920/(2*W) + "px");
	Tutoriel_navigateur.ellipseArrow1.setAttribute("cy", 32 + gui.labo_button_up.getHeight()*1080/(2*H) + "px");
	Tutoriel_navigateur.ellipseArrow1.setAttribute("rx", gui.labo_button_up.getWidth()*1920/(2*W) + 10 + "px");
	Tutoriel_navigateur.ellipseArrow1.setAttribute("ry", gui.labo_button_up.getHeight()*1080/(2*H) + 10 + "px");
	Tutoriel_navigateur.ellipseArrow1.style.fill = "black";
	
	Tutoriel_navigateur.ellipseArrow2.setAttribute("cx", 1888 - gui.labo_button_down.getWidth()*1920/(2*W) + "px");
	Tutoriel_navigateur.ellipseArrow2.setAttribute("cy", 1048 - gui.labo_button_down.getHeight()*1080/(2*H) + "px");
	Tutoriel_navigateur.ellipseArrow2.setAttribute("rx", gui.labo_button_down.getWidth()*1920/(2*W) + 10 + "px");
	Tutoriel_navigateur.ellipseArrow2.setAttribute("ry", gui.labo_button_down.getHeight()*1080/(2*H) + 10 + "px");
	Tutoriel_navigateur.ellipseArrow2.style.fill = "black";
	
	Tutoriel_navigateur.mask.appendChild(Tutoriel_navigateur.ellipseArrow1);
	Tutoriel_navigateur.mask.appendChild(Tutoriel_navigateur.ellipseArrow2);
	
	Tutoriel_navigateur.state = "labo_button";
	
	Tutoriel_navigateur.show();
	
	Tutoriel_navigateur.changeText("<tspan>Choississez un mot à</tspan><tspan x='200' dy='62'>combiner avec le précédent</tspan>", 200, 200, "left");
	
	Tutoriel_navigateur.changeEllipse(1280, 540, 450 ,500);
	
	Tutoriel_navigateur.changeArrow("m 860,250 c -2.0408,-3.30207 5.95336,-6.49626 19.65446,-7.85324 9.60727,-0.95152 9.7411,-1.40888 2.0605,-7.04129 -31.24847,-22.91539 -79.39016,-37.39908 -137.66768,-41.41806 -11.55856,-0.79711 -17.64746,-1.62371 -18.62831,-2.52887 -4.09978,-3.78342 5.44682,-4.53696 28.95714,-2.28569 57.83615,5.53821 105.44892,21.56879 135.05526,45.47131 7.89245,6.37193 7.94474,6.39544 7.94474,3.57126 0,-8.47423 -3.60261,-18.88838 -8.48278,-24.52141 -2.93872,-3.39207 -3.03271,-3.92176 -0.99579,-5.61225 1.27805,-1.06068 2.14312,-0.60916 5.40754,2.82247 5.79125,6.08786 8.31611,13.58084 8.8409,26.23698 0.35762,8.62442 0.15855,10.77286 -1.09454,11.81283 -1.24872,1.03634 -2.08995,0.98246 -4.55384,-0.29166 -3.76043,-1.9446 -11.21567,-1.94324 -21.62149,0.004 -4.4,0.82334 -9.40529,1.75724 -11.12287,2.07532 -1.71758,0.31808 -3.40654,0.11934 -3.75324,-0.44164 z")
}

Tutoriel_navigateur.transformation = function () {
	Tutoriel_navigateur.state = "word_try";
	
	Tutoriel_navigateur.changeText("<tspan>Puis cliquez sur</tspan><tspan x='800' dy='62'>\"Transformer\"</tspan>", 650, 800, "left")
	
	Tutoriel_navigateur.changeEllipse(480, 810, recherche.word_try.getWidth()*1920/(2*W) + 10, recherche.word_try.getWidth()*1920/(2*W) + 10);
	
	Tutoriel_navigateur.ellipseArrow1.parentNode.removeChild(Tutoriel_navigateur.ellipseArrow1);
	Tutoriel_navigateur.ellipseArrow2.parentNode.removeChild(Tutoriel_navigateur.ellipseArrow2);
	
	Tutoriel_navigateur.changeArrow("m 650,830 c -5.2528,-1.25113 -12.47438,-5.93825 -19.08198,-12.38504 -3.4375,-3.35383 -6.25,-6.92135 -6.25,-7.9278 0,-1.14846 1.31223,-2.3782 3.52378,-3.30224 1.93807,-0.80978 5.23703,-3.23773 7.33102,-5.39544 3.75339,-3.86761 12.5362,-16.27958 13.74075,-19.41858 0.77607,-2.0224 4.27527,-2.11181 5.03627,-0.12869 0.64234,1.67392 -5.92233,12.60374 -11.87251,19.76709 l -3.94555,4.75 3.65266,0 c 4.07491,0 23.18998,-4.12502 30.29826,-6.53834 34.56334,-11.73456 73.45244,-35.94744 107.98506,-67.23296 6.90925,-6.25958 8.49351,-7.27171 9.75,-6.22892 0.82514,0.68481 1.50026,1.59917 1.50026,2.0319 0,2.11981 -21.05874,20.42472 -38.14447,33.15637 -40.46664,30.15423 -79.63688,47.66502 -112.80501,50.42873 l -8.44948,0.70404 4.44948,3.83729 c 5.60584,4.83456 13.45643,8.58977 19.65467,9.40153 5.43205,0.71141 6.82486,1.61669 5.95898,3.87314 -0.65361,1.70329 -6.51938,1.99244 -12.33219,0.60792 z");
}

Tutoriel_navigateur.geste = function () {
	Tutoriel_navigateur.state = "nothing";
	
	Tutoriel_navigateur.changeText("<tspan>Passez votre curseur sur votre mot</tspan><tspan x='1000' dy='62'>pour voir la transformation s'opérer</tspan>", 150, 1000,"left");
	Tutoriel_navigateur.changeEllipse(960, 500, recherche.central_word.getWidth()*1920/(2*W) + 20, recherche.central_word.getWidth()*1920/(2*W) + 20)
	Tutoriel_navigateur.changeArrow("m 0,0");
}

Tutoriel_navigateur.editeur = function () {
	setTimeout(function () {
		Tutoriel_navigateur.state = "start_edit";
	
		Tutoriel_navigateur.changeArrow("m 820,1000 c -7.70649,-1.45119 -15.87459,-6.15475 -22.91579,-13.19596 -6.47083,-6.47082 -6.98726,-8.87186 -2.33252,-10.84448 4.29961,-1.82213 11.46888,-9.37014 17.11639,-18.02064 6.26802,-9.60094 6.50916,-9.84818 8.22025,-8.4281 0.77735,0.64515 1.41336,1.62152 1.41336,2.16973 0,1.6173 -6.84178,12.38081 -11.74217,18.39654 l -4.61067,5.66008 6.42642,-0.72186 c 38.74166,-4.35176 87.00412,-30.34034 134.71477,-72.5418 7.6616,-6.7769 9.54435,-8.00336 10.75,-7.00276 2.79624,2.32067 2.62436,2.52613 -14.53835,17.37912 -47.61658,41.20844 -100.40622,67.32413 -138.5,68.51767 l -5,0.15665 4.5,3.95865 c 5.74129,5.05062 11.86711,7.93121 19.75,9.2872 4.89469,0.84197 6.25,1.45713 6.25,2.83681 0,2.87067 -2.98,3.62124 -9.50169,2.39315 z");
		
		Tutoriel_navigateur.changeText("Rendez vous à présent dans l'éditeur !", 875, 900, "left");
		Tutoriel_navigateur.changeEllipse(640, 1048 - recherche.start_edit.getHeight()*1920/(2*W), recherche.start_edit.getWidth()*1920/(2*W) + 20, recherche.start_edit.getWidth()*1920/(2*W) + 20)
	}, 3500);
}

Tutoriel_navigateur.addMot = function () {
	Tutoriel_navigateur.state = "button_plus";
	
	Tutoriel_navigateur.changeEllipse(960, 230, 150, 150);
	
	Tutoriel_navigateur.changeArrow("m 680,440 c -0.93981,-2.44912 15.59509,-27.13745 31.20414,-46.59102 4.19241,-5.225 15.04756,-16.9494 24.12256,-26.05422 25.32162,-25.40484 45.63191,-39.35667 69.95617,-48.05531 l 6.45618,-2.3088 -6.45618,-3.02155 c -5.71059,-2.67261 -7.55574,-3.02953 -15.9777,-3.09062 -10.0267,-0.0727 -12.23309,-0.64239 -11.35462,-2.93165 1.51545,-3.94921 13.6228,-4.59533 23.43397,-1.25057 7.30143,2.48916 17.87403,8.47053 18.70807,10.58396 0.31034,0.78641 -0.99638,2.70566 -3.06385,4.5 -4.25348,3.69158 -8.66878,12.20096 -11.7415,22.62876 -1.21549,4.125 -2.78568,8.11575 -3.4893,8.86832 -1.7008,1.81914 -3.47124,0.59688 -3.47124,-2.39644 0,-2.95296 4.08971,-15.6844 6.92015,-21.54275 1.14392,-2.36764 2.07985,-4.4387 2.07985,-4.60237 0,-0.57723 -10.05123,3.6739 -17.20881,7.2784 -26.58057,13.38575 -57.44627,41.75643 -84.19393,77.38813 -5.5765,7.42869 -12.80621,17.66921 -16.06602,22.75671 -5.72101,8.92864 -8.57077,11.19533 -9.85794,7.84102 z");
	
	Tutoriel_navigateur.changeText("Cliquez ici pour ajouter un mot !", 500, 200, "left");
}

Tutoriel_navigateur.chooseWordType = function () {
	Tutoriel_navigateur.state = 'word_active';
	
	Tutoriel_navigateur.changeEllipse(960, 360, Editeur.multilignes.button_plus[0].word_active.getWidth()*1920/(2*W) + 50, Editeur.multilignes.button_plus[0].word_active.getHeight()*1080/(2*H) + 50);
	
	Tutoriel_navigateur.changeText("Cliquez ici pour ajouter un mot pouvant se transformer !", 540, 960, "middle");
	
	Tutoriel_navigateur.changeArrow("m 0,0");	
}

Tutoriel_navigateur.chooseWord = function () {
	Tutoriel_navigateur.state = null;
	
	Tutoriel_navigateur.hide();
}

Tutoriel_navigateur.endTuto = function () {
	Tutoriel_navigateur.show();
	Tutoriel_navigateur.changeEllipse(0, 0, 0, 0);
	
	Tutoriel_navigateur.state = 'nothing'
	
	Tutoriel_navigateur.changeText("<tspan>Bravo ! Vous avez découvert comment vous pouvez composer vos propres poèmes !</tspan><tspan x='960' dy='62'>Vous pouvez les sauvegarder en cliquant sur le bouton en bas</tspan><tspan x='960' dy='62'>Ils seront ensuite accessibles dans le salon</tspan>", 540, 960, "middle");
}

scriptLoaded('src/tutoriel/navigateur/navigateur.js');
