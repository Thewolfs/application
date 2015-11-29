/*
	Event scroll
*/

Event.scroll = function (e) {
	if(state == Labo){
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
	else
		return false;
};




scriptLoaded('scripts/libs/separation_toolkit/event/scroll.js');