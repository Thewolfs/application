/*
	Event scroll, permet de scroller avec la souris, un trackpad, ou un écran tactile.
*/
var last_time = new Date(); 
var lastY;

Event.scroll = function (e) {
	var now = new Date();
	if((now - last_time) >= 32)
	{
		if(appOnDevice_real() == false)
		{
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				switch(delta)
				{
					case 1:
                        if(state == Labo)
				            Labo.scrollUp();
                        else if(state == Editeur)
                            Editeur.scrollUp();
						break; 
					case -1: 
						if(state == Labo)
				            Labo.scrollDown();
                        else if(state == Editeur)
                            Editeur.scrollDown();
				}
			}
		else
		{
			console.log(e);
			var currentY = e.touches[0].clientY;
			if(currentY > lastY){
		        if(state == Labo)
                    Labo.scrollUp();
                else if(state == Editeur)
                    Editeur.scrollUp();
            }
		    else if(currentY < lastY){
                if(state == Labo)
                    Labo.scrollDown();
                else if(state == Editeur)
                    Editeur.scrollDown();
            }
		    lastY = currentY;
		    
		}
		last_time = new Date();
	}
};




scriptLoaded('scripts/libs/separation_toolkit/event/scroll.js');