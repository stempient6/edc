/* js goes here */

var menuObj = document.getElementsByClassName('dropdown')[0],
	topMenu = document.getElementsByClassName('mainmenu')[0],
	navBar = document.getElementsByTagName('nav')[0];

	topMenu.addEventListener('click', dropMenu);
	topMenu.addEventListener('mouseenter', showMenu);

		function showMenu() {
	navBar.style.overflow = ('visible');
}
	menuObj.addEventListener('click', dropMenu);
function dropMenu(){
 navBar.style.overflow = ('hidden');
}
var navDropdowns = document.getElementsByClassName('dropdown');
var navTimer;

for(var i = 0; i < navDropdowns.length; i++){
	(function(){
		navDropdowns[i].addEventListener('mouseenter', delayDropdown);
		navDropdowns[i].addEventListener('mouseleave', hideDropdown);

		function showDropdown(x){
			clearTimeout(navTimer);
			x.querySelector('ul').style.display = 'block';

		}
		function hideDropdown(){
			clearTimeout(navTimer);
			this.querySelector('ul').style.display = 'none';
		}
		function delayDropdown(){
			navTimer = window.setTimeout(showDropdown, 250, this);
		}
	})();
}
// console.log(menuObj);
//console.log(topMenu);

// function genericDelay(fn, ms) {
//    var timer;
//    return function() {
//       clearTimeout(timer);
//       timer = setTimeout(fn, ms || 500);
// 		navBar.style.overflow = ('visible'); 
//    }
// };


// // now just wrap your functions with genericDelay() to get delayed execution
// topMenu.onHover = genericDelay(function() { 
// 	navBar.style.overflow = ('visible'); 
// }, 200);