Event.keydown = function (e) {
	switch (state){
		case Labo: 
			if (e.keyCode == '38')
				Labo.scrollUp();
			else if (e.keyCode == '40')
				Labo.scrollDown();
			break;
        case Editeur: 
            if (e.keyCode == '38')
				Editeur.scrollUp();
			else if (e.keyCode == '40')
				Editeur.scrollDown();
		default: 
			return null;
	}
};




scriptLoaded('scripts/libs/separation_toolkit/event/keydown.js');