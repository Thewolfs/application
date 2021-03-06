/**
	Classe Recherche
*/
function Recherche() {
	this.allPossibilities = new Array();
	this.possibilities = new Array(); // Tableau des mots possibles
	this.words = new Array(); // Tableau des mots dans la liste déroulante
	this.nb_side = 5; // Nombre de mots de chaque côté du mot central
	this.nb_max = this.nb_side * 2 + 1; // Nombre maximum de mots
	
	this.central_word = null; // Objet Word
	this.central_word_value = null; // Objet Word
	this.word_to_save = null;
	this.word_try = null; // Objet Word qui déclenche un test
	
	this.coords_word = new Array(); // Coordonnées centrées des mots dans la liste 
	this.coords_central_word = {};
	this.coords_word_try = {};
	
	this.mot_act = 0; // Mot courant
	this.inAnimation = false;
	this.inTransform = false;
	
	this.baseValue = null;
	
	this.input = document.createElement('input');
	
	RechercheConstruct(this);
}

/*
	Constructeur
*/
function RechercheConstruct(r) {
	// Initialisation des coordonnées des mots
	/*
	var x = Math.ceil(W*2/3);
	var offsetY = Math.ceil(H/(2*(r.nb_side)));
	var offsetAlpha = 1 / r.nb_side;
	var offsetZoom = .1;
	
	for(var i = -r.nb_side; i <= r.nb_side; i++) {
		r.coords_word[r.nb_side+i] = {
			'x':x,
			'y':(H/2) + i * offsetY,
			'alpha': 1 - Math.abs(i) * offsetAlpha,
			'zoom': 1,// - Math.abs(i) * offsetZoom,
		};
	}
	*/
	
	var offsetAngle = Math.PI / (4 * (r.nb_side+1));
	var offsetY = Math.ceil(H/(2*r.nb_side));
	var offsetAlpha = 1 / r.nb_side;
	var offsetZoom = .2;
	
	var center = {'x': W/4, 'y': H/2 }
	var radius = 5*W/12;
	
	for(var i = -r.nb_side; i <= r.nb_side; i++) {
		r.coords_word[r.nb_side+i] = {
			'x': center.x + Math.cos(i * offsetAngle) * radius,
			'y': center.y + Math.sin(i * offsetAngle) * radius,
			'alpha': 1 - Math.abs(i) * offsetAlpha,
			'zoom': 1 - Math.abs(i) * offsetZoom,
		};
	}
	
	r.coords_central_word = {'x': W/4, 'y': H/2,};
	r.coords_word_try = {'x': W/4, 'y': H*3/4,};
}

Recherche.prototype.resetWords = function() {
	for(var i = 0; i < this.words.length; i++) {
		createjs.Tween.get(this.words[i].getNode()).to({'alpha': 0,}, 250);
	}
	this.words = new Array();
}

/*
	Scroll
*/
Recherche.prototype.scrollDown = function() { if(!this.inAnimation) { this.inAnimation = true;
	// Décalage des mots vers le haut
	Destroy.objet(this.words[0]);
	this.words.shift();
	
	// Ajout du nouveau mot
	this.mot_act = this.getValidId(this.mot_act + 1);
	var id_word = this.getValidId(this.mot_act + this.nb_side);
	var p = this.possibilities[id_word];
	
	this.words.push(new Word(p.getValue(), null, p.getPolice(), p.getCode(), null, null, 18.7 * W/100));
	this.words[this.nb_max-1].setAlpha(this.coords_word[this.nb_max-1].alpha);
	this.words[this.nb_max-1].display();
	
	this.scrollAnimation(200);
}}
Recherche.prototype.scrollUp = function() { if(!this.inAnimation) { this.inAnimation = true;
	// Décalage des mots vers le haut
	Destroy.objet(this.words[this.nb_max-1]);
	this.words.pop();
	
	// Ajout du nouveau mot
	this.mot_act = this.getValidId(this.mot_act - 1);
	var id_word = this.getValidId(this.mot_act - this.nb_side);
	var p = this.possibilities[id_word];
	
	this.words.unshift(new Word(p.getValue(), null, p.getPolice(), p.getCode(), null, null, 18.7 * W/100));
	this.words[0].setAlpha(this.coords_word[0].alpha);
	this.words[0].display();
	
	this.scrollAnimation(200);
}}
Recherche.prototype.scrollAnimation = function(duration) {
	for(var i = 0; i < this.nb_max; i++) {
		this.words[i].setAlpha(this.coords_word[i].alpha);
		this.words[i].setZoom(this.coords_word[i].zoom);
		this.words[i].setCenterXY(this.coords_word[i].x, this.coords_word[i].y);
		
		createjs.Tween.get(this.words[i].getNode()).to({
			'x': this.words[i].getX(),
			'y': this.words[i].getY(),
			'alpha': this.words[i].getAlpha(),
			'scaleX': this.words[i].getScale(),
			'scaleY': this.words[i].getScale(),
		}, duration);
	}
	setTimeout(function(r) { return function() { r.scrollFinish(); }}(this), duration);
}
Recherche.prototype.scrollFinish = function() {
	this.inAnimation = false;
	Labo.scrollFinish();
}

/*
	Ajoute un mot central à la liste
*/
Recherche.prototype.addCentralWord = function(word) {
	this.central_word = word;
	this.central_word_value = word.getValue();
}

Recherche.prototype.getCentralWord = function() {
	return this.word_to_save;
}

Recherche.prototype.setPossibilities = function(data) {
	var getPossibilityValue = function(Possibility) {
    	return Possibility.getValue();;
	}
	
	quickSort(data, getPossibilityValue, 0, data.length-1);

	this.allPossibilities = data;
}

Recherche.prototype.getValidId = function(i) {
	var l = this.possibilities.length;
	while(i < 0) { i += l; }
	while(i >= l) { i -= l; }
	return i;
}

Recherche.prototype.update = function () {
		this.resetWords();
		var j = 0;
		for (var i = this.mot_act - this.nb_side; i <= this.mot_act + this.nb_side; i++) {
			var ind = this.getValidId(i);
			var p = this.possibilities[ind];
			this.words[j] = new Word(p.getValue(), null, p.getPolice(), p.getCode(), null, null, 18.7 * W/100);
			this.words[j].setAlpha(this.coords_word[j].alpha);
			this.words[j].setZoom(this.coords_word[j].zoom);
			this.words[j].setCenterXY(this.coords_word[j].x, this.coords_word[j].y);
			j++;
		}
	}

/*
	Génère la ligne en générant tous les mots à partir du mot_top
*/
Recherche.prototype.generate = function(mot_act) {
	this.possibilities = this.allPossibilities;
	this.mot_act = mot_act;
	this.update();
	
	if (language == 'fr') 
		this.word_try = new Word('Transformer', null, 6, null, null, null, 13.7 * W/100);
	else
		this.word_try = new Word('Transform', null, 6, null, null, null, 13.7 * W/100);
	
	this.word_try.setZoom(0.6);
	this.word_try.setCenterXY(this.coords_word_try.x, this.coords_word_try.y);

	this.central_word = new Word(this.central_word_value, null, null, null, null, null, 18.7*W/100);
	this.central_word.setZoom(2);
	this.central_word.setCenterXY(this.coords_central_word.x, this.coords_central_word.y);
	
	// document.body.appendChild(this.input);
	// this.input.setAttribute('class', "inputLabo");
    // this.input.setAttribute('id',"inputLabo");
	// this.input.style.left = W/4 - this.input.offsetWidth/2 + "px";
	// this.input.style.top = H*3/5 - this.input.offsetHeight/2 + "px";
	// 
	// this.input.addEventListener('input', function () {
	// 	var dynamicArray = this.allPossibilities.slice(0);
	// 	var nRemoved = 0;
	// 	var regex = new RegExp(this.input.value);
	// 	for(var i=0; i < this.allPossibilities.length; i++) {
	// 		if(!this.allPossibilities[i].value.match(regex)) {
	// 			dynamicArray.splice(i-nRemoved, 1);
	// 			nRemoved++;
	// 			if(i <= this.mot_act) {
	// 				this.mot_act--;
	// 			}
	// 		}
	// 	}
    //     if(dynamicArray.length > 0) {
    //        this.possibilities = dynamicArray;
    //         this.update();
    //         for(var i = 0; i < this.words.length; i++) {
    //             this.words[i].display();
    //         } 
    //     }
    //     else {
    //        var callback = function () {
    //                     this.input.value = "";
    //                     this.possibilities = this.allPossibilities;
    //                     this.update();
	// 					for(var i = 0; i < this.words.length; i++) {
	// 						this.words[i].display();
	// 					}
    //                 }.bind(this);
    //         Inputbox.alert({
    //             message: "Aucune combinaison ne comporte cette suite de caractères",
    //             confirmText: "Ok"
    //         },
    //         {
    //             success: callback,
    //             cancel: callback
    //         });
    //     }
	// }.bind(this));
	
	Event.onTap('word_try', this.word_try, function() {
        // document.getElementById('inputLabo').remove();
		//this.input.parentNode.removeChild(this.input);
		cancelPointer(); 
		Labo.transform(); 
	}.bind(this), true);
		
	Event.onHover('word_try', this.word_try, function (event) {
		pointer();
	},
	function(event) {
		cancelPointer();
	});
	
	// Event.onTap('arrow_back', gui.arrow_back, function () { if(this.input.parentNode) {this.input.parentNode.removeChild(this.input);} Labo.start();}.bind(this), false);
}

Recherche.prototype.transform = function() { if(!this.inTransform) { this.inTransform = true;
	for(var i = 0; i < this.nb_max; i++) {
		// Effacement de la roue
		//if(i != this.nb_side) createjs.Tween.get(this.words[i].getNode()).to({'alpha': 0,}, 500);
		createjs.Tween.get(this.words[i].getNode()).to({'alpha': 0,}, 500);
	}
	
	// Animation du mot courant de la liste
	/*
	this.words[this.nb_side].setCenterX(W/2);
	this.words[this.nb_side].setY(0);
	createjs.Tween.get(this.words[this.nb_side].getNode()).to({'x': this.words[this.nb_side].getX(),'y': this.words[this.nb_side].getY(),}, 500);
	*/
	createjs.Tween.get(this.words[this.nb_side].getNode()).to({'x': this.words[this.nb_side].getX(),'y': this.words[this.nb_side].getY(),}, 500);
	
	// Effacement du mot try
	createjs.Tween.get(this.word_try.getNode()).to({'alpha': 0,}, 500);
	
	// Bouton Editeur
	if (language == 'fr')
		this.start_edit = new Word('Editeur', null, 6, null, null, null, 13.7 * W/100);
	else
		this.start_edit = new Word('Editor', null, 6, null, null, null, 13.7 * W/100);
	this.start_edit.setCenterX(W/3);
	this.start_edit.setY(H-margin-this.start_edit.getHeight());
	this.start_edit.setAlpha(0);
	this.start_edit.generate();
	this.start_edit.display();
	createjs.Tween.get(this.start_edit.getNode()).to({'alpha': 1,}, 500);
	Event.onTap('start_edit', this.start_edit, function() { 
			return function() { 
				cancelPointer();
				Labo.saveWord(); 
				Editeur.start(); }
			}
		(this), true);
	
	Event.onHover('start_edit', this.start_edit, function (event) {
		pointer();
	},
	function(event) {
		cancelPointer();
	});
	
	if (language == 'fr')
		this.back_to_recherche = new Word('Retour', null, 6, null, null, null, 13.7 * W/100);
	else
		this.back_to_recherche = new Word('Go back', null, 6, null, null, null, 13.7 * W/100);
	this.back_to_recherche.setCenterX(2*W/3);
	this.back_to_recherche.setY(H-margin-this.back_to_recherche.getHeight());
	this.back_to_recherche.setAlpha(0);
	this.back_to_recherche.generate();
	this.back_to_recherche.display();
	createjs.Tween.get(this.back_to_recherche.getNode()).to({'alpha': 1,}, 500);
	var r = this;
	Event.onTap('back_to_recherche', r.back_to_recherche, function() { 
		Inputbox.confirm({
			message: "Voulez-vous sauvegarder cette association de mots ?",
			confirmText: "Oui",
			cancelText: "Non"
		},
		{
			success: function () {
				Labo.saveWord();
				r.transformFinish();
			},
			cancel: function () {
				r.transformFinish();
			}
		})	
	}, true);
	
	Event.onHover('back_to_recherche', this.back_to_recherche, function (event) {
		pointer();
	},
	function(event) {
		cancelPointer();
	}); 

	// Modification du mot central
	this.central_word.setNextValue(this.words[this.nb_side].getValue());
	this.baseValue = this.central_word.value;
	this.central_word.setPolice(this.words[this.nb_side].getPolice());
	this.central_word.setCode(this.words[this.nb_side].getCode());
	this.central_word.generate();
	this.word_to_save = new Word(this.central_word.getValue(), this.central_word.getNextValue(), this.central_word.getPolice(), this.central_word.getCode());
	this.central_word.display();
	// Animation du mot central
	this.central_word.setCenterXY(W/2, H/2);
	createjs.Tween.get(this.central_word.getNode())
		.to({'x': this.central_word.getX(),'y': this.central_word.getY(),}, 500)
		.call(function(r){return function(){ r.central_word.addGesture();}}(this));
	
	if(Tutoriel_navigateur.currentState == "transformation") {
		canvas.dispatchEvent(Tutoriel_navigateur.event);
	}
}}

Recherche.prototype.transformFinish = function() {
	// Affichage de la roue
	this.scrollAnimation(500);

	// Affichage du mot try
	createjs.Tween.get(this.word_try.getNode()).to({'alpha': 1,}, 500);
	
	// Effacement du lien editeur de recit
	createjs.Tween.get(this.start_edit.getNode()).to({'alpha': 0,}, 500)
	Event.onTap('start_edit', this.start_edit, function() {}, true);

	createjs.Tween.get(this.back_to_recherche.getNode()).to({'alpha': 0,}, 500)
	Event.onTap('back_to_recherche', this.back_to_recherche, function() {}, true);
	Event.destroyHover('back_to_recherche');
	
	document.body.appendChild(this.input)
	
	// Affichage du mot centrale
	this.central_word.setValue(this.baseValue);
	this.central_word.generate();
	this.central_word.display();
	this.central_word.setCenterXY(this.coords_central_word.x, this.coords_central_word.y);
	this.central_word.removeGesture();
	createjs.Tween.get(this.central_word.getNode())
		.to({'x': this.central_word.getX(),'y': this.central_word.getY(),}, 500);
	
	this.inTransform = false;
}

/*
	Affiche la ligne en affichant tous les mots
*/
Recherche.prototype.display = function() {
	for(var i = 0; i < this.words.length; i++) {
		this.words[i].display();
	}
	this.word_try.display();
	this.central_word.display();
}

Recherche.prototype.destroy = function() {
	Destroy.arrayObjet(this.words);
	Destroy.objet(this.central_word);
	Destroy.objet(this.word_try);
}


scriptLoaded('src/labo/recherche.js');
