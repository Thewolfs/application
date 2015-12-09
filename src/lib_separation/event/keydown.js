Event.keydown = function (e) {
	console.log('on rentre');
	switch (state){
		case Labo: 
			if (e.keyCode == '38')
				Labo.scrollUp();
			else if (e.keyCode == '40')
				Labo.scrollDown();
			break;
		default: 
			return null;
	}
};




scriptLoaded('scripts/libs/separation_toolkit/event/keydown.js');