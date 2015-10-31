/**
        Namespace recit
*/
var Recit = {};
// var DEBUG = false;
var story = null;
var story_page = null;
var recit_menu = null;

/*
        Point d'entrée du récit
*/
Recit.start = function() {
	Recit.destroy();
	story_page = 1;
	MyStorage.loadAllStories()
	Recit.computeSizes();

	Recit.displayStoriesMenu();
	
	state = Recit;
}

Recit.destroy = function() {
	if(story != null)
		Destroy.objet(story);
	
	word_active = false;
}

Recit.displayStoriesMenu = function() {
	Destroy.all();
	gui.Recit_menu_displayAll();
	
	stories = MyStorage.listStories();
	recit_menu = new Recit_Menu(stories);
	log("Chargement des stories : "+stories);
	recit_menu.generate();
}

Recit.openStory = function(story_name) {
	log('Ouverture de ' + story_name);
	Destroy.all();
	gui.Recit_displayAll();

	story = MyStorage.getStory(story_name);
	story.generate();
	story.display();
}

/*
        Détermination de la taille de la police en fonction de la hauteur du canvas
*/
Recit.computeSizes = function() {
	Recit.cst = fontConst.recit;
	Recit.cst.line.nb = Math.floor(H / Recit.cst.line.height);
}

scriptLoaded('src/recit/recit.js');
