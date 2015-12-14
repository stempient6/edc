/* js goes here */
var bodyObj = document.body,
	loginObj = document.querySelector('#login'),
	formObj = document.querySelector('#login form'),
	submitBtn = document.querySelector('#login input[type="submit"]');

loginObj.style.display = 'none';

if(typeof(Storage) !== 'undefined'){
	bodyObj.style.overflow = 'hidden';
	loginObj.style.display = 'block';

	if(localStorage.getItem('username') === null && localStorage.getItem('password') === null){
		submitBtn.addEventListener('click', function(evt){
			submitForm(evt);
		});
	}else{
		formObj.elements[0].value = localStorage.getItem('username');
		formObj.elements[0].readOnly = true;
		formObj.elements[0].disabled = true;
		submitBtn.addEventListener('click', function(evt){
			validateForm(evt);
		});
	}
}

var submitForm = function(e){
	e.preventDefault();
	//console.log('running submit form');
	var formElems = formObj.elements;
	for(var i = 0; i < formElems.length-1; i++){
		submitInfo(formElems[i]);
	}
};
var submitInfo = function(x){
	if(x.type === 'password'){
		var pass = btoa(x.value);
		localStorage.setItem('password', pass);
	}else{
		localStorage.setItem('username', x.value);
	}
};

var validateForm = function(e){
	e.preventDefault();
	//console.log('running validate form');
	var formElems = formObj.elements;
	for(var i = 0; i < formElems.length-1; i++){
		validateInfo(formElems[i]);
	}
};
var validateInfo = function(x){
	var oldPass = localStorage.getItem('password');
	if(x.type === 'password'){
		var newPass = btoa(x.value);
		if(oldPass === newPass){
			x.classList.remove('err');
			bodyObj.style.overflow = 'scroll';
			loginObj.style.display = 'none';
		}else{
			x.classList.add('err');
		}
	}
};