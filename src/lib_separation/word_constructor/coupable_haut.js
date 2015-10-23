function Word_coupable_haut(data) {
	//// CUSTOM BITMAP TEXT
	// this.up = new WordLetters(data.code, data.police, 'demihauth').getBmp();
	// this.down = new WordLetters(data.value, data.police, 'demihautb').getBmp();
	// this.next_down = new WordLetters(data.next_value, data.police, 'demihautb').getBmp();

	//// EASELJS BITMAP TEXT
	this.up = new createjs.Text(data.code, "256px demihauth", data.color);
	this.down = new createjs.Text(data.value, "256px demihautb",  data.color);
	this.next_down = new createjs.Text(data.next_value, "256px demihautb",  data.color);
	if(data.value == '+')
		this.up = new createjs.Text(data.value, "256px Arial", "#fff");
	// this.up = new createjs.BitmapText(data.code, SS['demihauth']);
	// this.down = new createjs.BitmapText(data.value, SS['demihautb']);
	// this.next_down = new createjs.BitmapText(data.next_value, SS['demihautb']);

	this.up.y = fontConst.police[data.police].offsetY['demihauth'];
	this.down.y = fontConst.police[data.police].offsetY['demihautb'];
	this.next_down.y = fontConst.police[data.police].offsetY['demihautb'];

	this.next_down.alpha = 0;

	this.container = new createjs.Container();
	this.container.width = this.up.getBounds().width;
	this.container.height = fontConst.car.height_img;
	
	// var temp = new createjs.Shape();
	// temp.graphics.beginFill("#ff0000").drawRect(0, 0, this.container.width, this.container.height);
	// this.container.addChild(temp);
	
	this.container.addChild(this.up, this.down, this.next_down);
}

Word_coupable_haut.prototype.destroy = function() {
	this.container.removeChild(this.up, this.down, this.next_down);
	stage.removeChild(this.container);
}

scriptLoaded('src/lib_separation/word_constructor/coupable_haut.js');
