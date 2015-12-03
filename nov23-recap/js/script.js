/* js goes here */
 var formObj = document.getElementsByTagName('form')[0],
 	 bodyObj = document.body,
 	 btnObj = document.getElementById('submitBtn'),
	 iconObj = document.getElementById('icon');

	 iconObj.addEventListener('mouseenter', function(){
	 	formObj.style.top = '105px';
	 	formObj.style.zIndex = '100';
	 	iconObj.style.cursor = "pointer";
	 });
 	 iconObj.addEventListener('click', function(){
		formObj.style.top = '-115px';
		formObj.style.zIndex = '10';
	 });
	// console.log(btnObj);

var dropdownA = document.getElementById("dropdown1");
var dropdownB = document.getElementById("dropdown2");
var dropdownC = document.getElementById("dropdown3");
var styleA = dropdownA.options[dropdownA.selectedIndex].value;
var styleB = dropdownB.options[dropdownB.selectedIndex].value;
var styleC = dropdownC.options[dropdownC.selectedIndex].value;

btnObj.addEventListener('click', function(evt){
 
 evt.preventDefault();
 // console.log(styleC);
 // console.log(styleB);
 // console.log(styleA);
	bodyObj.style.backgroundColor = dropdownA.options[dropdownA.selectedIndex].value;
	bodyObj.style.fontSize = dropdownB.options[dropdownB.selectedIndex].value;
	bodyObj.style.color = dropdownC.options[dropdownC.selectedIndex].value;
	formObj.style.top = '-115px';
	formObj.style.zIndex = '10';

});

var dropdowns = document.getElementsByClassName('dropdown');

	 for(var i = 0; i < dropdowns.length; i++){
		(function(){
	 	dropdowns[i].addEventListener('mouseenter', showDropdown);
	 	dropdowns[i].nextSibling.addEventListener('mouseleave', hideDropdown);
	 	 function showDropdown(){
	 	 	this.nextSibling.classList.add('visible');
	 	 }
	 	 function hideDropdown(){
	 	 	this.classList.remove('visible');
	 	 }
 	})();
 }
