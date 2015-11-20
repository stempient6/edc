/* js goes here */


var kittens = Math.floor((Math.random() * 50) + 1),
	litterBox = document.getElementById("litterbox"); 
console.log(litterBox);

 function litter(){
	litterBox.innerHTML = '<img src="img/kitten.png" height="auto" width="50" alt="">';
	}
 for (var i = kittens.length; i >= 0; i++) {
 	litter();
 };
