/*
	Event hover
*/

Event.hover_obj = {};

Event.triggered = null;

Event.onHover = function (id, object, callbackOnEvent, callbackOnAbort) {
	this.hover_obj[id] = {
		x1: object.getX(),
		y1: object.getY(),
		x2: object.getX() + object.getWidth(),
		y2: object.getY() + object.getHeight(),
		onEvent: callbackOnEvent,
		onAbort: callbackOnAbort,
	}
};

Event.hover = function(event) {
	var coords = {
		x: event.clientX,
		y: event.clientY,
	};
	for(var i in Event.hover_obj) {
		var obj = Event.hover_obj[i];
		if(obj === undefined) alert('undefined : ' + i); else
		// On regarde si le curseur est dans le cadre
		if((obj.y1 <= coords.y) && (coords.y <= obj.y2) &&
			(obj.x1 <= coords.x) && (coords.x <= obj.x2)) {
			obj.onEvent(event);
			this.triggered = i;
		}
		else if(this.triggered == i)
		{
			if(typeof obj.onAbort() != "undefined") {
				obj.onAbort();
				this.triggered = null;
			}
		}
	}
};

Event.destroyHover = function(id) {
	Destroy.listItem(Event.hover_obj, id);
}

scriptLoaded('scripts/libs/separation_toolkit/event/hover.js');