/************************************************************
	@description
		Fichier JS principal, contient :
		- La fonction main() pour démarrer l'application
		- Le namespace App contenant la fonction d'initialisation
		  et la boucle principale de l'application
*************************************************************/
// Namespace App
var App = App || {};

App.init = function() {
    if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || !!document.documentMode)
    {
        document.location.href = "forbidden.html";
    }
	//Fix du gitan pour le centrage
	var gitan = new createjs.Text("gitan", "256px demihauth", "#fff");
	gitan.getBounds();
	
	//Chargement des divs
	Tutoriel_navigateur.loadAssets();
	
	// Initialisation du canvas
	canvas = document.createElement('canvas');
	// GUIcanvas = document.createElement('canvas');

	canvas.width = W;
	canvas.height = H;
	// GUIcanvas.width = W;// * window.devicePixelRatio;
	// GUIcanvas.height = H;// * window.devicePixelRatio;

	document.body.appendChild(canvas);
	
	//Initialisation de l'inputbox
	inputbox = document.getElementsByClassName('inputbox')[0];
	inputboxcontainer = document.getElementsByClassName('inputboxcontainer')[0];
	inputboxbuttoncontainer = document.getElementsByClassName('inputboxbuttoncontainer')[0];
	
	inputbox.style.opacity = 0;
	
	//Positionnement de la boite
	inputbox.style.left = (W - W * 40/100)/2 + "px";
	inputbox.style.top = (H - H * 50/100)/2 + "px";
	
	// Initialisation du stage
	stage = new createjs.Stage(canvas);
	ctx = stage.canvas.getContext('2d');
	GUIstage = stage;
	createjs.Touch.enable(stage);
	
	gui = new Gui();
	
	// Initialisation des events
	stage.on(Event.events.tap, Event.tap);
	canvas.addEventListener(Event.events.hover, Event.mousehover);
	canvas.addEventListener(Event.events.touchmove, Event.touchmove);
	canvas.addEventListener(Event.events.scroll, Event.scroll);
	document.addEventListener(Event.events.touchend, Event.touchend);
	document.addEventListener(Event.events.keydown, Event.keydown);
	window.addEventListener('resize', function () { 
		if(can_reload)
			window.location.reload();
		
		W = window.innerWidth;
		H = window.innerHeight;
		
		canvas.width = W;
		canvas.height = H;
		canvas.style.zIndex = "1";
		
		inputbox.style.left = (W - W * 40/100)/2 + "px";
		inputbox.style.top = (H - H * 50/100)/2 + "px";
		
		Destroy.all();
		state.start();
	});
	
	// Initialisation des FPS
	//createjs.Ticker.setFPS(NB_FPS);
	
	initConstantes();
	
	Destroy.all();
};

App.mainLoop = function() {
	stage.update();
	// GUIstage.update();
};

App.start = function() {
	sound_manager = new Sound();
	// sound_manager.play("ambiant");
	
	var url = window.location.search.replace("?", "").split("=");
    
    if(url[0] == "load" && url[1].indexOf("true") !== -1)
        Recit.loadStory();
	else if(localStorage.getItem("skipIntro") == "true")
	{
		Menu.start();
	}
	else {
		Intro.start();
        localStorage.setItem("skipIntro",true);
	}
};

// Démarrage de l'application
App.main = function() {
	App.init();
	
	createjs.Ticker.addEventListener("tick", function() {
		App.mainLoop();
	});

	Rooter.preloadAll(function(){
		App.start();
	});
};

scriptLoaded('src/main.js');
