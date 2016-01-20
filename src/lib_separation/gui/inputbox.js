/*
	Class Inputbox
*/

var Inputbox = {}

Inputbox.show = function() {
	inputbox.style.display = 'block';
	inputboxcontainer.children[1].focus();
	
	inputbox.style.opacity = parseFloat(inputbox.style.opacity) + 0.1;
	if(inputbox.style.opacity < 1) {
		setTimeout(Inputbox.show, 30);
	}
};

Inputbox.hide = function() {	
	inputbox.style.opacity = parseFloat(inputbox.style.opacity) - 0.1;
	if(inputbox.style.opacity > 0) {
		setTimeout(Inputbox.hide, 20);
	}
	else {
		inputbox.style.display = 'none';
		inputboxcontainer.children[1].value = "";
	}
	
};

/*
	Affiche une boite avec possibilité de rentrer du texte. 
	Utilisation : 	options = { message: string, confirmText: string, cancelText: string, type: inputtype }
					callbacks = {success: function, cancel: function} <- argument optionel
*/
Inputbox.prompt = function (options, callbacks) {
	//Création des éléments nécessaires
	var input = document.getElementsByTagName('input')[0];
	var title = document.getElementById('message');
	var confirm = document.getElementById('confirm');
	var cancel = document.getElementById('cancel');
	
	//Ajout du texte custom
	title.textContent = options.message;
	confirm.textContent = options.confirmText;
    if(options.cancelText !== undefined){
        cancel.textContent = options.cancelText;
        cancel.style.display = 'inline-block';
    }
    else{
        cancel.style.display = 'none';
    }
	
	
	input.type = options.type;
	
	input.style.display = 'inline-block';
	title.style.display = 'block';
	confirm.style.display = 'inline-block';
	
		
	//Binding des évènements
	inputbox.addEventListener("click", function (event){
		event.stopPropagation();
	});
	
	confirm.addEventListener("click", confirm_callback);
			
	cancel.addEventListener("click", cancel_callback);
	
	setTimeout(function () {
		canvas.addEventListener("click", cancel_callback);
	}, 0);
	
	function cancel_callback() {
		canvas.removeEventListener("click", cancel_callback);
		confirm.removeEventListener("click", confirm_callback); 
		cancel.removeEventListener("click", cancel_callback);
		Inputbox.hide();
		if(typeof callbacks != "undefined" && typeof callbacks.cancel == "function")
		{
			callbacks.cancel();
		}
	};
	
	function confirm_callback() {
		var text = input.value;
		Inputbox.hide();
		if(typeof callbacks != "undefined" && typeof callbacks.success == "function") {
			canvas.removeEventListener("click", cancel_callback);
			confirm.removeEventListener("click", confirm_callback); 
			cancel.removeEventListener("click", cancel_callback);
			callbacks.success(text);
		}
	}
	
	Inputbox.show();
};

/*
	Affiche une boite type alert. 
	Utilisation : 	options = { message: string, confirmText: string }
					callbacks = { success: function, cancel: function } <- argument optionel
*/
Inputbox.alert = function (options, callbacks) {
	//Création des éléments nécessaires
	var input = document.getElementsByTagName('input')[0];
	var title = document.getElementById('message');
	var confirm = document.getElementById('confirm');
	var cancel = document.getElementById('cancel');
	
	//Ajout du texte custom
	title.textContent = options.message;
	confirm.textContent = options.confirmText;
	
	cancel.style.display = 'none';
	input.style.display = 'none';
	title.style.display = 'block';
	confirm.style.display = 'inline-block';
	
		
	//Binding des évènements
	inputbox.addEventListener("click", function (event){
		event.stopPropagation();
	});
	
	confirm.addEventListener("click", confirm_callback);
	
	setTimeout(function () {
		canvas.addEventListener("click", cancel_callback);
	}, 0);
	
	function cancel_callback() {
		canvas.removeEventListener("click", cancel_callback);
		confirm.removeEventListener("click", confirm_callback); 
		cancel.removeEventListener("click", cancel_callback);
		Inputbox.hide();
		if(typeof callbacks != "undefined" && typeof callbacks.cancel == "function")
		{
			callbacks.cancel();
		}
	};
	
	function confirm_callback() {
		Inputbox.hide();
		if(typeof callbacks != "undefined" && typeof callbacks.success == "function") {
			confirm.removeEventListener("click", confirm_callback); 
			cancel.removeEventListener("click", cancel_callback);
			canvas.removeEventListener("click", cancel_callback);
			callbacks.success();
		}
	}
	
	this.show();
};

/*
	Affiche une boite posant une question fermée. 
	Utilisation : 	options = { message: string, confirmText: string, cancelText: string }
					callbacks = {success: function, cancel: function} <- argument optionel
*/

Inputbox.confirm = function (options, callbacks) {
	//Création des éléments nécessaires
	var input = document.getElementsByTagName('input')[0];
	var title = document.getElementById('message');
	var confirm = document.getElementById('confirm');
	var cancel = document.getElementById('cancel');
	
	//Ajout du texte custom
	title.textContent = options.message;
	confirm.textContent = options.confirmText;
	cancel.textContent = options.cancelText;
	
	input.style.display = 'none';
	title.style.display = 'block';
	confirm.style.display = 'inline-block';
	cancel.style.display = 'inline-block';
		
	//Binding des évènements
	inputbox.addEventListener("click", function (event){
		event.stopPropagation();
	});
	
	confirm.addEventListener("click", confirm_callback);
	
	cancel.addEventListener("click", cancel_callback);
	
	setTimeout(function () {
		canvas.addEventListener("click", cancel_callback);
	}, 0);
	
	function cancel_callback() {
		canvas.removeEventListener("click", cancel_callback);
		confirm.removeEventListener("click", confirm_callback); 
		cancel.removeEventListener("click", cancel_callback);
		Inputbox.hide();
		if(typeof callbacks != "undefined" && typeof callbacks.cancel == "function")
		{
			callbacks.cancel();
		}
	};
	
	function confirm_callback() {
		Inputbox.hide();
		if(typeof callbacks != "undefined" && typeof callbacks.success == "function") {
			callbacks.success();
			canvas.removeEventListener("click", cancel_callback);
			confirm.removeEventListener("click", confirm_callback); 
			cancel.removeEventListener("click", cancel_callback);
		}
	}
	
	this.show();
};

scriptLoaded('src/lib_separation/gui/inputbox.js');