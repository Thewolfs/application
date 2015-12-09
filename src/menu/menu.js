/*
	Namespace Menu
*/
var Menu = {};
Menu.words = new Array();
Menu.anim_duration = 2000;
Menu.opacity = 0.5;
Menu.low_alpha_lang = 0.4;
Menu.high_alpha_lang = Menu.opacity;
Menu.lang_anim_duration = 500;
Menu.margin = W * 7/100;

Menu.start = function() {
	state = Menu;
	can_reload = false;
	Destroy.all();
	
	Menu.recit();
	Menu.labo();
	Menu.aide();
	Menu.mentions_legales();
	Menu.contacts();
	Menu.editeur();
	Menu.lang();

	show_err_message_too_many_stories = true;

	gui.MenuPrincipal();
	
	Tutoriel.start();
}

Menu.destroy = function() {
	Destroy.arrayObjet(Menu.words);
}

Menu.recit = function() {
	var zoom = 2;

	if (language == 'fr')
		Menu.words['recit'] = new Word('Salon', null, 6, null, null, null, 15.8 * W/100);
	else
		Menu.words['recit'] = new Word('Salon', null, 6, null, null, null, 15.8 * W/100);
	
	Menu.words['recit'].setZoom(zoom);
	Menu.words['recit'].setX(W);
	Menu.words['recit'].setCenterY(H * 1/2);
	Menu.words['recit'].display();
	Menu.words['recit'].setCenterX(W - (this.margin + Menu.words['recit'].getWidth()/2));
	Tween.get(Menu.words['recit'].getNode()).to({
			x: Menu.words['recit'].getX(),
		}, Menu.anim_duration, Ease.sineOut);	
	
	Event.onTap('Menu.recit', Menu.words['recit'], function() {
		Recit.start();
		cancelHover();
	}, true);
	
	function hover(event) {
		pointer();
		Hoverbox.display(event, null, "C'est ici que vous retrouverez vos créations et des exemples de poèmes");
	}
	
	function cancelHover() {
		cancelPointer();
		Hoverbox.hide();
	}
	
	Event.onHover('Menu.recit', Menu.words['recit'], hover, cancelHover);
}

Menu.labo = function() {
	var zoom = 2;

	if (language == 'fr')
		Menu.words['labo'] = new Word('Labo', null, 6, null, null, null, 15.8 * W/100);
	else
		Menu.words['labo'] = new Word('Lab', null, 6, null, null, null, 15.8 * W/100);
	Menu.words['labo'].setZoom(zoom);
	Menu.words['labo'].setX(-Menu.words['labo'].getWidth());
	Menu.words['labo'].setCenterY(H * 1/2);
	Menu.words['labo'].display();

	Menu.words['labo'].setCenterX(this.margin + Menu.words['labo'].getWidth()/2);
	
	Tween.get(Menu.words['labo'].getNode()).to({
			x: Menu.words['labo'].getX(),
		}, Menu.anim_duration, Ease.sineOut);	
	
	Event.onTap('Menu.labo', Menu.words['labo'], function() {
		Labo.start();
		cancelHover();
	}, true);
	
	function hover(event) {
		pointer();
		Hoverbox.display(event, null, "Le labo permet de découvrir la poésie à 2 mi-mots et de créer ses propres combinaisons");
	}
	
	function cancelHover() {
		cancelPointer();
		Hoverbox.hide();
	}
	
	Event.onHover('Menu.labo', Menu.words['labo'], hover, cancelHover);
}

Menu.editeur = function() {
	var zoom = 2;
	if (language == 'fr') 
		Menu.words['editeur'] = new Word('Éditeur', null, 6, null, null, null, 15.8 * W/100);
	else 
		Menu.words['editeur'] = new Word('Editor', null, 6, null, null, null, 15.8 * W/100);
	Menu.words['editeur'].setZoom(zoom);
	//Menu.words['editeur'].setCenterXY(W / 2, H * 7.5/12);
	Menu.words['editeur'].setCenterXY(this.margin + Menu.words['recit'].getWidth() + (W - (this.margin * 2 + Menu.words['recit'].getWidth() + Menu.words['labo'].getWidth()))/2, H * 1/2);
	Menu.words['editeur'].getNode().alpha = 0;
	Menu.words['editeur'].display();
	
	/*Tween.get(Menu.words['editeur'].getNode()).to({
			alpha: Menu.opacity,
		}, Menu.anim_duration, Ease.sineIn);*/
	
	Event.onTap('Menu.editeur', Menu.words['editeur'], function () {
		Editeur.start(); 
		cancelHover();
	}, true);
	
	function hover(event) {
		pointer();
		Hoverbox.display(event, null, "L'éditeur permet de créer ses propres poèmes à 2 mi-mots et de les sauvegarder pour les redécouvrir par la suite");
	}
	
	function cancelHover() {
		cancelPointer();
		Hoverbox.hide();
	}
	
	Event.onHover('Menu.editeur', Menu.words['editeur'], hover, cancelHover);
}

Menu.aide = function() {
	if (language == 'fr')
		Menu.words['aide'] = new Word('Aide', null, 6, null, null, null, 14.5 * W/100);
	else
		Menu.words['aide'] = new Word('Help', null, 6, null, null, null, 14.5 * W/100);
	Menu.words['aide'].setZoom(0.7);

	Menu.words['aide'].setCenterXY(W / 2, H * 9/12);
	Menu.words['aide'].getNode().alpha = 0;
	Menu.words['aide'].display();

	Tween.get(Menu.words['aide'].getNode()).to({
			alpha: Menu.opacity,
		}, Menu.anim_duration, Ease.sineIn);
	
	Event.onTap('Menu.aide', Menu.words['aide'], function() {
		document.location.href = "aide.html";
	}, true);
	
	Event.onHover('Menu.aide', Menu.words['aide'], pointer, cancelPointer);
}

Menu.mentions_legales = function() {
	if (language == 'fr')
		Menu.words['mentions_legales'] = new Word('Mentions légales', null, 6, null, null, null, 14.5 * W/100);
	else
		Menu.words['mentions_legales'] = new Word('Legal Notice', null, 6, null, null, null, 14.5 * W/100);
	Menu.words['mentions_legales'].setZoom(0.7);

	Menu.words['mentions_legales'].setCenterXY(W / 2, H * 10/12);
	Menu.words['mentions_legales'].getNode().alpha = 0;
	Menu.words['mentions_legales'].display()

	Tween.get(Menu.words['mentions_legales'].getNode()).to({
			alpha: Menu.opacity,
		}, Menu.anim_duration, Ease.sineIn);
	
	Event.onTap('Menu.mentions_legales', Menu.words['mentions_legales'], function() {
		document.location.href = "mentions_legales.html";
	}, true);
	
	Event.onHover('Menu.mentions_legales', Menu.words['mentions_legales'], pointer, cancelPointer);
}

Menu.contacts = function() {
	if (language == 'fr')
		Menu.words['contacts'] = new Word('Contacts', null, 6, null, null, null, 14.5 * W/100);
	else
		Menu.words['contacts'] = new Word('Contacts', null, 6, null, null, null, 14.5 * W/100);
	Menu.words['contacts'].setZoom(0.7);

	Menu.words['contacts'].setCenterXY(W / 2, H * 11/12);
	Menu.words['contacts'].getNode().alpha = 0;
	Menu.words['contacts'].display()

	Tween.get(Menu.words['contacts'].getNode()).to({
			alpha: Menu.opacity,
		}, Menu.anim_duration, Ease.sineIn);
	
	Event.onTap('Menu.contacts', Menu.words['contacts'], function() {
		document.location.href = "contacts.html";
	}, true);
	
	Event.onHover('Menu.contacts', Menu.words['contacts'], pointer, cancelPointer);
}



Menu.lang = function() {
	Menu.words['lang_EN'] = new Word('En', null, 6, null, null, null, 14.5 * W/100);
	var width = Menu.words['lang_EN'].getWidth();
	Menu.words['lang_EN'].setCenterXY(W / 2 - width, H * 2/12);
	Menu.words['lang_EN'].setAlpha(0);
	Menu.words['lang_EN'].display();

	Menu.words['lang_FR'] = new Word('Fr', null, 6, null, null, null, 14.5 * W/100);
	Menu.words['lang_FR'].setCenterXY(W / 2 + width, H * 2/12);
	Menu.words['lang_FR'].setAlpha(0);
	Menu.words['lang_FR'].display();

	if (language == 'fr') {
		log('Version francaise');
		Tween.get(Menu.words['lang_EN'].getNode()).to({
				alpha: Menu.low_alpha_lang,
			}, Menu.anim_duration, Ease.sineIn);
		Tween.get(Menu.words['lang_FR'].getNode()).to({
				alpha: Menu.high_alpha_lang,
			}, Menu.anim_duration, Ease.sineIn);

		Event.onTap('Menu.lang_EN', Menu.words['lang_EN'], function() {
			language = 'en';
			cancelPointer();
			Menu.start();
			/*
			Tween.get(Menu.words['lang_EN'].getNode()).to({
					alpha: Menu.high_alpha_lang,
				}, Menu.lang_anim_duration, Ease.sineIn);
			Tween.get(Menu.words['lang_FR'].getNode()).to({
					alpha: Menu.low_alpha_lang,
				}, Menu.lang_anim_duration, Ease.sineIn);*/
		}, true);
		
		Event.onHover('Menu.lang_EN', Menu.words['lang_EN'], pointer, cancelPointer);
	}
	else {
		log('English version');
		Tween.get(Menu.words['lang_EN'].getNode()).to({
				alpha: Menu.high_alpha_lang,
			}, Menu.anim_duration, Ease.sineIn);
		Tween.get(Menu.words['lang_FR'].getNode()).to({
				alpha: Menu.low_alpha_lang,
			}, Menu.anim_duration, Ease.sineIn);

		Event.onTap('Menu.lang_FR', Menu.words['lang_FR'], function() {
			language = 'fr';
			cancelPointer();
			Menu.start();
			/*
			Tween.get(Menu.words['lang_EN'].getNode()).to({
					alpha: Menu.low_alpha_lang,
				}, Menu.lang_anim_duration, Ease.sineIn);
			Tween.get(Menu.words['lang_FR'].getNode()).to({
					alpha: Menu.high_alpha_lang,
				}, Menu.lang_anim_duration, Ease.sineIn);*/
		}, true);
		
		Event.onHover('Menu.lang_FR', Menu.words['lang_FR'], pointer, cancelPointer);
	}
}

scriptLoaded('src/menu/menu.js');
