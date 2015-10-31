Rooter={};

Rooter.preloadAll = function(handler) {
	var manifest = [
		// Image
			// Logo
			{src:"img/logo/logo_up.png", id:"logo_up"},
			{src:"img/logo/logo_central.png", id:"logo_central"},
			{src:"img/logo/logo_down.png", id:"logo_down"},
			// GUI
			{src:"img/gui/logo_miniature.png", id:"gui_logo"},
			{src:"img/gui/arrow_right.png", id:"gui_arrow_right"},
			{src:"img/gui/arrow_left.png", id:"gui_arrow_left"},
			{src:"img/gui/back.png", id:"gui_arrow_back"},
			{src:"img/gui/scroll_down.png", id:"gui_scroll_down"},
			{src:"img/gui/scroll_up.png", id:"gui_scroll_up"},
			{src:"img/gui/scroll_left.png", id:"gui_scroll_left"},
			{src:"img/gui/scroll_right.png", id:"gui_scroll_right"},
			{src:"img/gui/roll_up.png", id:"gui_roll_up"},
			{src:"img/gui/roll_down.png", id:"gui_roll_down"},
			{src:"img/gui/sauvegarde.png", id:"gui_sauvegarde"},
			{src:"img/gui/cross.png", id:"gui_clear"},
			{src:"img/gui/hand.png", id:"help_hand"},
			// Fonts
			{src:"fonts/FINEMIHAUT2.ttf", id:"font_demihaut"},
			{src:"fonts/FINEMIHAUT2H.ttf", id:"font_demihauth"},
			{src:"fonts/FINEMIHAUT2B.ttf", id:"font_demihautb"},
			{src:"fonts/FINEMIBAS2H.ttf", id:"font_demibash"},
			{src:"fonts/FINEMIBAS2B.ttf", id:"font_demibasb"},
			{src:"img/font/centrale_h.png", id:"font_centraleh"},
			{src:"img/font/centrale_c.png", id:"font_centralec"},
			{src:"img/font/centrale_b.png", id:"font_centraleb"},
			// Menu labo
			{src:"img/menu_labo/input_text.png", id:"menu_labo_input_text"},
			{src:"img/menu_labo/checkbox.png", id:"menu_labo_checkbox"},
			{src:"img/menu_labo/checkbox_valid.png", id:"menu_labo_checkbox_valid"},
			// Menu recit
			{src:"img/menu_recit/vignette.png", id:"menu_recit_vignette"},
			{src:"img/menu_recit/erase.png", id:"cross_erase"},
			// Ombre
			{src:"img/ombre/OMBRE.png", id:"OMBRE"},
			{src:"img/ombre/CYGNE.png", id:"CYGNE"},
			{src:"img/ombre/shading.png", id:"SHADING"},
			{src:"img/ombre/slicing.png", id:"SLICING"},
		// Audio
			// {src:"sound/cut.ogg", id:"audio_cut", type: createjs.AbstractLoader.SOUND},
			// {src:"sound/rub1.ogg", id:"audio_rub1", type: createjs.AbstractLoader.SOUND},
			// {src:"sound/rub2.ogg", id:"audio_rub2"},
			// {src:"sound/tear1.ogg", id:"audio_tear1"},
			// {src:"sound/tear2.ogg", id:"audio_tear2"},
			// {src:"sound/ambiant.ogg", id:"audio_ambiant"}
    ];
	
	// createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashPlugin]);
	
	preload = new createjs.LoadQueue(false, "res/");
	createjs.Sound.alternateExtensions = ["mp3"];
	preload.installPlugin(createjs.Sound);
	preload.on("complete", function() { initAllSS(); handler(); });
	preload.loadManifest(manifest);
};

function res(id) { return preload.getResult(id); }
function resSS(id) {
	return preload.getResult('font_'+id);
}

scriptLoaded('src/rooter.js');
