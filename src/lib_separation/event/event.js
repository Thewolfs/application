/*
	Namespace Event
*/
var Event = {};
var isFirefox = typeof InstallTrigger !== 'undefined'; 
var old_touch_move = {x:-1, y:-1};

Event.events = {
	tap : (appOnDevice_real() ? 'click' : 'click'),
	touchmove : (appOnDevice_real() ? 'touchmove' : 'mousemove'),
	touchend : (appOnDevice_real() ? 'touchend' : 'mouseleave'),
	dbltap : (appOnDevice_real() ? 'dblclick' : 'dblclick'),
	hover : (appOnDevice_real() ? '' : 'mousemove'),
	scroll : (appOnDevice_real() ? '' : (isFirefox)? 'DOMMouseScroll' : 'mousewheel')
	}

Event.getMousePos = function(event) {
	// event de createJS 'click'
	return { x: event.stageX, y: event.stageY };
};

Event.getMousePosMove = function(event) {
	// event classique HTML
	if(!appOnDevice_real()) {
		return { x: event.clientX, y: event.clientY };
	}
	else {
		return { 
			x: event.touches[0].clientX,
			y: event.touches[0].clientY
		};
	}
};

Event.getTouchPos = function(event) {
	return Event.getMousePos(event);
};

Event.getTouchMove = function(event) {
	var new_touch_move = Event.getMousePosMove(event);

	if(old_touch_move.x == -1 && old_touch_move.y == -1)
		old_touch_move = new_touch_move;

	var coords = {
		x1: old_touch_move.x,
		y1: old_touch_move.y,
		x2: new_touch_move.x,
		y2: new_touch_move.y,
	};
	old_touch_move = new_touch_move;

	return coords;
};

Event.invertTouchmoveXY = function(coords) {
	var temp1 = coords.x1, temp2 = coords.x2;

	coords.x1 = coords.y1;
	coords.x2 = coords.y2;
	coords.y1 = temp1;
	coords.y2 = temp2;
	
	return coords;
};

Event.touchmove = function(event) {
	event.preventDefault();
	var coords = Event.getTouchMove(event);

	Event.cut(coords);
	Event.erase(coords);
	Event.open(Event.invertTouchmoveXY(coords));
};

Event.touchend = function(event) {
	old_touch_move = {x:-1, y:-1};
	Event.touchMoveAbortAll(Event.cut_obj);
	Event.touchMoveAbortAll(Event.erase_obj);
	Event.touchMoveAbortAll(Event.open_obj);
};

Event.mousehover = function(event) {
	Event.hover(event);
}

Event.destroy = function(id, type) {
	if(type !== undefined) {
		switch(type) {
			case 'tap' : Event.destroyTap(id); break;
			case 'dbltap' : Event.destroyDbltap(id); break;
			case 'cut' : Event.destroyCut(id); break;
			case 'erase' : Event.destroyErase(id); break;
			case 'open' : Event.destroyOpen(id); break;
			case 'hover' : Event.destroyHover(id); break;
			//case 'scroll' : Event.destroyScroll(id); break;
			default: alert('"' + type + '" inconnu dans Event.destroy()');
		}
	}
	else {
		Event.destroyTap(id);
		Event.destroyDbltap(id);
		Event.destroyCut(id);
		Event.destroyErase(id);
		Event.destroyOpen(id);
		//Event.destroyScroll(id);
		Event.destroyHover(id);
	}
};

Event.destroyAll = function() {
	Destroy.list(Event.tap_obj);
	Destroy.list(Event.dbltap_obj);
	Destroy.list(Event.cut_obj);
	Destroy.list(Event.erase_obj);
	Destroy.list(Event.open_obj);
	Destroy.list(Event.hover_obj);
};

scriptLoaded('scripts/libs/separation_toolkit/event/event.js');