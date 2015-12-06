/*
	Event scroll
*/
var last_time = new Date(); 
var lastY;

Event.scroll = function (e) {
	var now = new Date();
	if(state == Labo && (now - last_time) >= 32)
	{
		if(appOnDevice_real() == false)
		{
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
		{
			console.log(e);
			var currentY = e.touches[0].clientY;
			if(currentY > lastY)
		        Labo.scrollUp();
		    else if(currentY < lastY)
		        Labo.scrollDown();
		    lastY = currentY;
		    
		}
		last_time = new Date();
	}
};




scriptLoaded('scripts/libs/separation_toolkit/event/scroll.js');