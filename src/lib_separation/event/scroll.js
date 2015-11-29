/*
	Event scroll
*/
var last_time = new Date(); 

Event.scroll = function (e) {

	var now = new Date();
	if(state == Labo && (now - last_time) >= 100){
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		switch(delta)
		{
			case 1: 
				Labo.scrollUp();
				break; 
			case -1: 
				Labo.scrollDown();
		}
	}
	last_time = new Date();
};




scriptLoaded('scripts/libs/separation_toolkit/event/scroll.js');