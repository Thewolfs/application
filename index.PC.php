<!DOCTYPE HTML>
<html>


	<head>
		<title>La Séparation</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="user-scalable=no"/>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
		<link rel="icon" href="favicon.ico" type="image/x-icon">
		<style>
			@font-face {
				font-family: demihauth;
				src: url(res/fonts/FINEMIHAUT2H.ttf);
			}
			@font-face {
				font-family: demihautb;
				src: url(res/fonts/FINEMIHAUT2B.ttf);
			}
			@font-face {
				font-family: demibash;
				src: url(res/fonts/FINEMIBAS2H.ttf);
			}
			@font-face {
				font-family: demibasb;
				src: url(res/fonts/FINEMIBAS2B.ttf);
			}
			@font-face {
				font-family: Rounded_Elegance;
				src: url(res/fonts/Rounded_Elegance.ttf);
			}
			@font-face {
				font-family: Icons;
				src: url(res/fonts/icon-works-webfont.ttf)
			}
			@font-face {
				font-family: Gilles_Handwriting;
				src: url(res/fonts/Gilles_Handwriting.ttf)
			}
		</style>
		
		<script type="text/javascript">
			var loaded_scripts = 0;
			var n_scripts = 70;
			function scriptLoaded(script_path) {
				loaded_scripts++;
				console.debug(loaded_scripts + '/' + n_scripts + " : " + script_path);
			}
		</script>
		
		<!-- Libs -->
		<script src="src/lib/createjs-2015.05.21.min.js"></script>
		<script src="src/lib/cocoon.min.js"></script>
		<script src="src/lib/xml-for-cocoonjs.js"></script>
        <script src="src/lib/jquery-2.2.0.min.js"></script>
		
		<!-- Main files -->
		<script type="text/javascript" src="src/functions.js"></script>
		<script type="text/javascript" src="src/var.js"></script>
		<script type="text/javascript" src="src/rooter.js"></script>
		<script type="text/javascript" src="src/main.js"></script>
		
		
			<!-- Intro -->
			<script type="text/javascript" src="src/intro/intro.js"></script>
			<!-- Menu -->
			<script type="text/javascript" src="src/menu/menu.js"></script>
			<!-- Salon -->
			<script type="text/javascript" src="src/recit/recit.js"></script>
			<script type="text/javascript" src="src/recit/line.js"></script>
			<script type="text/javascript" src="src/recit/menu.js"></script>
			<script type="text/javascript" src="src/recit/page.js"></script>
			<script type="text/javascript" src="src/recit/story.js"></script>
			<script type="text/javascript" src="src/recit/story_types/story_one_page.js"></script>
			<!-- Labo -->
			<script type="text/javascript" src="src/labo/possibility.js"></script>
			<script type="text/javascript" src="src/labo/laboratory.js"></script>
			<script type="text/javascript" src="src/labo/cloud.js"></script>
			<script type="text/javascript" src="src/labo/recherche.js"></script>
			<script type="text/javascript" src="src/labo/menu.js"></script>
			<!-- Editeur -->
			<script type="text/javascript" src="src/editeur/editeur.js"></script>
			<script type="text/javascript" src="src/editeur/editeur_classic.js"></script>
			<script type="text/javascript" src="src/editeur/editeur_multilignes.js"></script>
			<script type="text/javascript" src="src/editeur/recherche.js"></script>
			<!-- Database -->
			<script type="text/javascript" src="src/lib_separation/requetes/dbRequest.js"></script>
			<!-- StoriesDb -->
			<script type="text/javascript" src="res/story/stories.js"></script>
			<!--Tutoriel -->
			<script type="text/javascript" src="src/tutoriel/tutoriel.js"></script>
			<script type="text/javascript" src="src/tutoriel/navigateur/navigateur.js"></script>
			<!-- lib_separation -->
				<!-- Logo -->
				<script type="text/javascript" src="src/lib_separation/logo/logo.js"></script>
				<!-- Codes -->
				<script type="text/javascript" src="src/lib_separation/codes/codes.js"></script>
				<!-- Word -->
				<script type="text/javascript" src="src/lib_separation/word/word.js"></script>
				<script type="text/javascript" src="src/lib_separation/word/constantes.js"></script>
				<!-- Word_constructor -->
				<script type="text/javascript" src="src/lib_separation/word_constructor/coupable_haut.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/coupable_bas.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/coupable_entier.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/centrale.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/rounded_elegance.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/icons.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/ombre.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/spritesheets.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/letter.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_constructor/word_letters.js"></script>
				<!-- Word_animation -->
				<script type="text/javascript" src="src/lib_separation/word_animation/animation.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_animation/coupable_haut.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_animation/coupable_bas.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_animation/centrale.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_animation/ombre.js"></script>
				<script type="text/javascript" src="src/lib_separation/word_animation/effects.js"></script>
				<!-- Event -->
				<script type="text/javascript" src="src/lib_separation/event/event.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/touchmove.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/tap.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/cut.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/erase.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/open.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/sound.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/word.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/hover.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/scroll.js"></script>
				<script type="text/javascript" src="src/lib_separation/event/keydown.js"></script>
				<!-- Destroy -->
				<script type="text/javascript" src="src/lib_separation/destroy/destroy.js"></script>
				<!-- XML -->
				<script type="text/javascript" src="src/lib_separation/xml/xml.js"></script>
				<!-- Db -->
				<script type="text/javascript" src="src/lib_separation/db/db.js"></script>
				<!-- Image -->
				<script type="text/javascript" src="src/lib_separation/image/image.js"></script>
				<!-- GUI -->
				<script type="text/javascript" src="src/lib_separation/gui/gui.js"></script>
				<script type="text/javascript" src="src/lib_separation/gui/inputbox.js"></script>
				<script type="text/javascript" src="src/lib_separation/gui/hoverbox.js"></script>
				<script type="text/javascript" src="src/lib_separation/gui/parameterbox.js"></script>
				<!-- Json -->
				<script type="text/javascript" src="src/lib_separation/json/json.js"></script>
				<!-- STorage -->
				<script type="text/javascript" src="src/lib_separation/storage/storage.js"></script>
		<!--Text-->
		<script type="text/javascript" src="src/text.js"></script>
	<style>
		* { margin:0; padding: 0; }
		body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
		input { width: 98%; height: 25px; }
		.inputLabo {
			position: absolute;
			z-index: 2;
			width: 20vw;
			height: 2vw;
			border-radius: 1vw
		}
		.inputbox 
		{ 
			height: 22vw;
			width: 40vw;
			background-color: #FFF; 
			position: relative; 
			display: none; 
			border-radius: 10px; 
			padding: 10px; 
			text-align: center; 
			-webkit-transform-style: preserve-3d; 
			-moz-transform-style: preserve-3d; 
			transform-style: preserve-3d; 
			/*width: 30%; 
			height: 30%;*/
			z-index: 3;
			font-family: Rounded_Elegance;
			font-size: 1.5vw;
		}
		.inputboxcontainer { padding-top: 1em; position: relative; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); text-align: center;}
		canvas { position: absolute; top: 0; left: 0; z-index: 0;}
		.inputbox > .inputboxcontainer > .inputboxbuttoncontainer > button 
		{    
			width: 6.1vw;
			height: 6.1vw;
			display: inline-block;
			border-radius: 50%;
			background: black;
			color: white;
			font-family: Rounded_Elegance;
			font-size: 1.5vw;
			margin: 1em;
			border:none;
     	}
     	.inputbox > .inputboxcontainer > .inputboxbuttoncontainer > button:hover {
     		cursor:pointer;
     		background: grey;
     	}
		.inputbox > .inputboxcontainer > input 
		{
			display: inline-block;
			border-radius: 2em;
			padding: 0.7em 0.1em;
			margin-top: 2em;
			background: black;
			border: none;
			color: white;
			padding-left: 2em;
			width: 90%;
			font-family: Rounded_Elegance;
			font-size: 1.5vw;
		}
		#hoverbox {
			position: absolute;
			top: 0;
			left: 0;
			width: 20vw;
			z-index: 3;
			background-color: white;
			display: none;
			border-radius: 5px;
			border: 1px solid black;
			font-family: Rounded_Elegance;
			font-size: 1.2vw;
			padding: 2px;
		}
		#hoverbox > p {
			text-align: left;
		}
		#tutoriel {
			display: none;
			position: absolute;
			z-index: 5;
			pointer-events: none;
			width: 100%;
			height: 100%;			
		}
		#tutoriel > a {
			position: absolute;
			left: 5px;
			bottom: 5px;
			pointer-events: auto;
			font-family: Gilles_Handwriting;
			font-size: 2vw;
			color: white;
		}
		#parameter {
			display: none;
			position: absolute;
			z-index: 5;
			background-color: white;
			font-family: Rounded_Elegance;
			font-size: 1.3vw;
			list-style: none;
			padding: 2px;
			border-radius: 5px;
		}
		a {
			color: black;
			font-style: none;
			text-decoration: none;
		}
		a:hover {
			color: black;
			font-style: none;
			text-decoration: none;
			cursor: pointer;
		}
		a:visited {
			color: black;
			font-style: none;
			text-decoration: none;
		}
	</style>
	</head>
	<body>
		<div id="tutoriel">
			<svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none">
				<defs>
					<mask id="tutoMask">
						<rect width="100%" height="100%" x="0" y ="0" style="fill:white"></rect>
						<ellipse id="ellipseTuto" cx="0" cy="0" rx="" ry="" style="fill:black"></ellipse>
					</mask>
				</defs>
				
				<rect width="100%" height="100%" x="0" y ="0" style="fill:rgba(62,62,62,0.7);" mask="url(#tutoMask)"></rect>
				<path id="arrow" d="" style="fill: rgb(255,255,255)"></path>
				<text id="textTuto" fill="white" style="font-size: 60px; font-family: Gilles_Handwriting;"></text>
			</svg>
			<a>Quitter le tutoriel</a>
		</div>
		<div id="parameter">
			<ul>
				<li><a id="toggleInfo">Désactiver les infobulles</a></li>
				<li><a id="toggleTuto">Relancer le tutoriel</a></li>
			</ul>
		</div>
		<div id="hoverbox">
				<h2 id="hovertitle"></h2>
				<p></p>
		</div>
		<div class="inputbox">
			<div class="inputboxcontainer">
				<h2 id="message"></h2>
				<input id="inputboxinput" autofocus/>				
				<div class="inputboxbuttoncontainer">
					<button id="confirm"></button>
					<button id="cancel"></button>
				</div>
			</div>
		</div>
	</body>
	<script>
		function start() {
			if(loaded_scripts == n_scripts) {
				App.main();
			} else {
				console.debug(loaded_scripts);
				setTimeout(function() { start(); }, 200);
			}
		}
		start();
	</script>
</html>
