/* js goes here */
var globalObj = document.getElementById('global');
var menuToggleBtn = document.getElementById('menuToggleBtn');
var menuHideBtn = document.getElementById('menuHideBtn');
 
  menuToggleBtn.addEventListener('click', function(){
  	global.classList.toggle('toggleMenu');

  });
    menuHideBtn.addEventListener('click', function(){
  	global.classList.toggle('hideMenu');

  });