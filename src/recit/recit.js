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

Recit.loadStory = function() {
    
	this.url = window.location.search;
    this.load = this.url.slice(this.url.indexOf("load=")+5);
    this.id = this.url.slice(this.url.indexOf("id=")+3);
    this.myStory = "";
    this.json = "";

    if(this.load.indexOf("true") !== -1){
        this.json = dbRequest.get("id",this.id);
        //json = json.slice(1,json.length - 1);
       
        myStory = JsonHandler.storyFromJson(JSON.parse(this.json));
        //console.log(myStory);
        setTimeout(MyStorage.addStory(myStory.name, this.json),100);
        setTimeout(Recit.openStory(myStory.name),100);       
    }
}

//permet d'uploader un poeme sur la BDD et de créer un lien de partage
//on récupère la story dans le local storage
//on la transforme en Objet. Si la story a déjà été partagée, on renvoie l'URL associée
//sinon on push sur la BDD, on récupère l'id généré, puis on créé le lien de partage

Recit.uploadStory = function(name){
    
    this.story = localStorage.getItem("story_" + language + "_" + name);
    this.parsedStory = JSON.parse(this.story);
    
    if(typeof(this.parsedStory.url) == 'undefined'){
        
        this.json = "'" + this.story.replace("'"," ") + "'";
        dbRequest.insert(name +"$temp$",this.json);
        var id = dbRequest.get("name",name + "$temp$");
        this.url = "http://localhost/application%20-%20Copie/index.PC.php?load=true&id=" +id;
        dbRequest.update(id,"nom",name);
        this.parsedStory.url = this.url;
        MyStorage.updateStory(name,this.parsedStory);
    }
    else{
        this.url = this.parsedStory.url;
    }
    Inputbox.prompt({ message: "URL de partage:", confirmText: 'ok', cancelText: 'fermer', type: 'texte'});
    $('#inputboxinput').val(this.url).select();
}

/*
        Détermination de la taille de la police en fonction de la hauteur du canvas
*/
Recit.computeSizes = function() {
	Recit.cst = fontConst.recit;
	Recit.cst.line.nb = Math.floor(H / Recit.cst.line.height);
}

scriptLoaded('src/recit/recit.js');
