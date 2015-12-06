function Word_rounded_elegance(data) {


	//// EASELJS BITMAP TEXT
	this.word = new createjs.Text(data.value, data.fontSize + "px Rounded_Elegance", data.color);

	this.word.y = 0;
	this.container = new createjs.Container()
	this.container.width = this.word.getBounds().width;
	this.container.height = data.fontSize;
	
	// var temp = new createjs.Shape();
	// temp.graphics.beginFill("#ff0000").drawRect(0, 0, this.container.width, this.container.height);
	// this.container.addChild(temp);
	
	this.container.addChild(this.word);
}

Word_rounded_elegance.prototype.destroy = function() {
	this.container.removeChild(this.word);
	stage.removeChild(this.container);
}

scriptLoaded('src/lib_separation/word_constructor/coupable_bas.js');
