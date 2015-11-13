/* js goes here */

var loginBtn = document.getElementById('login'),
 	loginBox = document.getElementById('loginbox'),
	username = document.getElementById('username'),
	password = document.getElementById('password'),
	hrdConfirm = document.getElementById('hrd');
	savedUsername = 'thomas',
	savedPassword = 'javascript';
	


loginBtn.addEventListener('click', toggleLoginBox);
	function toggleLoginBox(){
	loginBox.classList.toggle('active');
		username.value = '';
		password.value = '';
		username.classList.remove('error');
		password.classList.remove('error');
};

function userlogin(){
	var unValue = username.value;
	var pwValue = password.value;
	//console.log(unValue +' '+ pwValue);
	if(unValue === savedUsername && pwValue === savedPassword){
		hrdConfirm.textContent = 'YOURE IN!';
		//window.location = 'http://google.com';

		toggleLoginBox();
	}
	if(!unValue || unValue !== savedUsername){
		username.classList.add('error');

	}else{
		username.classList.remove('error');
	}
	if(!pwValue || pwValue !== savedPassword){
		password.classList.add('error');

	}else{
		password.classList.remove('error');

	}

}









//////////////////////////////////
var nameLi = document.getElementById('name');
var addressLi = document.getElementById('address');
var cityStateZipLi = document.getElementById('cityStateZip');
var mylastname = 'Stempien';
var myFirstName = '<h1>Thomas</h1>',
	myAddress = '2533 W. McKinley Space 285',
	city, state, zip,
	getterLi = document.getElementById('getter');

	console.log(getterLi.innerHTML);

nameLi.innerHTML = myFirstName + ' ' + mylastname;
addressLi.textContent = myAddress;


function getinfo(){
	city = prompt('What City?');
	state = prompt('What State?');
	zip = prompt('What zip?');
	if (!city || !state || !zip) {
		alert("you're and idiot!");
		getinfo();

	}else{
		var isCorrect = confirm('Is this correct?\n' + city + ', ' + state + '. ' + zip);
		if(!isCorrect){
			getinfo();
		}else{

			cityStateZipLi.textContent = city + ' ' + state + '. ' + zip;
		}
	}
};



// var city = prompt('What city do you live in?'),
// 	state = prompt('What State do you live in?'),
// 	zipcode = parseInt(prompt('Is your zipcode?'));
// 	document.write(city + ' ' + state + '. ' + zipcode);
// 	console.log(typeof zipcode)