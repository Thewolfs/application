/*** TEMP ***/

function Word_ombre(data) {
	opacity_OMBRE = 1;
	if(language == 'fr') {
		this.CYGNE = new createjs.Bitmap(res('CYGNE'));
		this.OMBRE = new createjs.Bitmap(res('OMBRE'));
		var scale = 0.95;
	} else {
		this.CYGNE = new createjs.Bitmap(res('SLICING'));
		this.OMBRE = new createjs.Bitmap(res('SHADING'));
		var scale = 0.8;
	}
	var offsetX = 25;
	var offsetY = -0;
	this.OMBRE.scaleX = scale;
	this.OMBRE.scaleY = scale;
	this.CYGNE.scaleX = scale;
	this.CYGNE.scaleY = scale;
	this.OMBRE.x = offsetX;
	this.CYGNE.x = offsetX;
	this.OMBRE.y = offsetY;
	this.CYGNE.y = offsetY;
	this.CYGNE.alpha = 0;

	this.container = new createjs.Container();
	this.container.width = this.OMBRE.image.width * scale;
	this.container.height = this.OMBRE.image.height * scale;
	
	this.container.addChild(this.CYGNE, this.OMBRE);
	
	/*this.destroy = function() {
		this.CYGNE.destroy();
		this.OMBRE.destroy();
	}*/
}

Word_ombre.prototype.destroy = function() {
	this.container.removeChild(this.CYGNE, this.OMBRE);
	stage.removeChild(this.container);
}

scriptLoaded('src/lib_separation/word_constructor/ombre.js');
