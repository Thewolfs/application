function Word_icons(data) {


	//// EASELJS BITMAP TEXT
	this.word = new createjs.Text(data.value, data.fontSize + "px Icons", data.color);

	this.word.y = 0;
	this.container = new createjs.Container()
	this.container.width = this.word.getBounds().height;
	this.container.height = this.word.getBounds().height;
	
	// var temp = new createjs.Shape();
	// temp.graphics.beginFill("#ff0000").drawRect(0, 0, this.container.width, this.container.height);
	// this.container.addChild(temp);
	
	this.container.addChild(this.word);
}

Word_icons.prototype.destroy = function() {
	this.container.removeChild(this.word);
	stage.removeChild(this.container);
}

scriptLoaded('src/lib_separation/word_constructor/icons.js');
