/** Editeur.multilignes **/

Editeur.multilignes = {
	draft_name: "Editeur.multilignes.draft",
	nb_lines: 3,
	word_add: '+'
};

Editeur.multilignes.start = function () {
	Destroy.all();
	gui.Editeur_displayAll();
	this.init();
	this.generate();
	this.display();
}.bind(Editeur.multilignes);

Editeur.multilignes.init = function () {
	var i;
	this.loadDraft();
	this.button_plus = [];
	var nbWordDisplay = new Word("Nombre de caractère maximum : 35", null, 6, null, null, null, 14.5 * W/100);
	nbWordDisplay.setY(5);
	nbWordDisplay.setCenterX(W/2);
	nbWordDisplay.display();
}.bind(Editeur.multilignes);

Editeur.multilignes.generate = function () {
	var i, j, new_button, line;
	for(i = 0; i < this.page.lines.length; i++) {
		line = this.page.lines[i];

		new_button = new ButtonPlus(i, false);
		line.addAtBegin(new_button.word);
		this.button_plus.push(new_button);
		
		if(line.words.length > 1) {
			new_button = new ButtonPlus(i, true);
			line.add(new_button.word);
			this.button_plus.push(new_button);
		}
	}
	var Ysize = H-margin-size_icon;
	this.page.generate(Ysize, W/2, Ysize/2);
	for(i = 0; i < this.button_plus.length; i++) {
		this.button_plus[i].generate();
	}
}.bind(Editeur.multilignes);

Editeur.multilignes.display = function () {
	this.page.display();
}.bind(Editeur.multilignes);
Editeur.multilignes.erase = function () {
	this.story.destroy();
	this.generateDraft();
	this.saveDraft();
	Editeur.start();
}.bind(Editeur.multilignes);

Editeur.multilignes.destroy = function () {
	if(!!this.story) {
		this.saveDraft();
		this.story.destroy();
		this.story = null;
	}
}.bind(Editeur.multilignes);

Editeur.multilignes.getJSON = function () {
	if(!this.story) {
		this.loadDraft();
	}
	var json = JsonHandler.jsonFromStory(this.story);
	var i, j, line, id;

	for(i = 0; i < json.pages[0].lines.length; i++) {
		line = json.pages[0].lines[i];
		for(j = 0; j < line.words.length; j++) {
			if(line.words[j].value === " " || line.words[j].value === this.word_add) {
				line.words.splice(j, 1);
				j--;
			}
		}
	}

	return JSON.stringify(json);
}.bind(Editeur.multilignes);
Editeur.multilignes.saveDraft = function () {
	localStorage.setItem(this.draft_name, this.getJSON());
}.bind(Editeur.multilignes);
Editeur.multilignes.loadDraft = function () {
	var draft = localStorage.getItem(this.draft_name);
	if(draft === null) {
		this.generateDraft();
	}
	else {
		this.story = JsonHandler.storyFromJson(JSON.parse(draft));
		this.page = this.story.pages[0];
	}
}.bind(Editeur.multilignes);
Editeur.multilignes.generateDraft = function () {
	this.story = new StoryOnePage();
	this.page = new Page();
	this.story.addPage(this.page);

	for(i = 0; i < this.nb_lines; i++) {
		this.page.addLine();
	}
}.bind(Editeur.multilignes);

Editeur.multilignes.addWordToLine = function (line_id, word, addAtBegin) {
	this.loadDraft();
	if(line_id < this.page.lines.length) {
		if(!addAtBegin) {
			this.page.lines[line_id].add(word);
		}
		else {
			this.page.lines[line_id].addAtBegin(word);
		}
	}
	this.saveDraft();
}.bind(Editeur.multilignes);

Editeur.multilignes.save = function () {
	this.textInputTitle(function (text) {
		this.story.name = removeAccent(text);
		MyStorage.addStory(this.story.name, this.getJSON());
		this.erase();
		Recit.start();
	}.bind(this));
}.bind(Editeur.multilignes);

Editeur.multilignes.textInputTitle = function(callback_success) {
	function callback_cancel() {
		return;
	}

	if (language == 'fr') {
		Inputbox.prompt({
			message : "Tapez un titre :",
			type : "text",
			confirmText : "Ok",
			cancelText : "Annuler"
		},
		{
			success: callback_success
		});
	}
	else {
		Inputbox.prompt({
			message : "Write a title:",
			type : "text",
			confirmText : "Ok",
			cancelText : "Cancel"
		},
		{
			success: callback_success,
			cancel: callback_cancel
		});
	}
}.bind(Editeur.multilignes);

/** ButtonPlus **/

function ButtonPlus(line_id, addAtEnd) {
	this.line_id = line_id;
	this.word = new Word(Editeur.multilignes.word_add, null, null, null, null, null, 256);
	this.addAtBegin = !addAtEnd;
}

ButtonPlus.prototype.generate = function () {
	Event.onTap('button_plus' + randRange(0,100), this.word, function () {
		cancelPointer();
		this.onTap();
	}.bind(this), true);
	
	Event.onHover('button_plus' + randRange(0,100), this.word, function (event) {
		pointer();
	},
	function(event) {
		cancelPointer();
	});
};

ButtonPlus.prototype.onTap = function () {
	Destroy.all();
	gui.Editeur_returnMain();
	var new_word;

	if (language == 'fr') {
		this.word_active = new Word("Ajouter un mot actif", null, 6, null, null, null, 13.7 * W/100);
		this.word_classic = new Word("Ajouter un mot simple", null, 6, null, null, null, 13.7 * W/100);
	} else {
		this.word_active = new Word("Add active word", null, 6, null, null, null, 13.7 * W/100);
		this.word_classic = new Word("Add classic word", null, 6, null, null, null, 13.7 * W/100);
	}
	
	this.word_active.setCenterXY(W/2,H/3);
	this.word_classic.setCenterXY(W/2,2*H/3);
	this.word_active.display();
	this.word_classic.display();
	Event.onTap('word_active', this.word_active, function () {
		cancelPointer();
		RechercheEditeur.start(function (new_word) {
			Editeur.multilignes.addWordToLine(this.line_id, new_word, this.addAtBegin);
			Editeur.start();
		}.bind(this), true);
	}.bind(this));
	this.word_classic.onTap(function () {
		this.textInputWord(function (text) {
			Editeur.multilignes.addWordToLine(this.line_id, new Word(removeAccent(text), null, null, null, null, null, 18.7 * W/100), this.addAtBegin);
			Editeur.start();
		}.bind(this));
	}.bind(this));
	
	Event.onHover('word_active', this.word_active, function (event) {
		pointer();
	},
	function(event) {
		cancelPointer();
	});
	
	Event.onHover('word_classic', this.word_classic, function (event) {
		pointer();
	},
	function(event) {
		cancelPointer();
	});
	
	if(Tutoriel_navigateur.currentState == "addMot") {
		canvas.dispatchEvent(Tutoriel_navigateur.event);
	}
};

ButtonPlus.prototype.textInputWord = function(callback_success) {
	function callback_cancel() {
		return;
	}

	if (language == 'fr') {
		Inputbox.prompt({
			message : "Tapez un mot à ajouter :",
			type : "text",
			confirmText : "Ok",
			cancelText : "Annuler"
		},
		{
			success: callback_success
		});
	}
	else {
		Inputbox.prompt({
			message : "Write a word to be added:",
			type : "text",
			confirmText : "Ok",
			cancelText : "Cancel"
		},
		{
			success: callback_success,
			cancel: callback_cancel
		});
	}
};

scriptLoaded('src/editeur/editeur_multilignes.js');