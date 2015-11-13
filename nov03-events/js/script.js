/* js goes here */
// var paraObj = document.getElementsByTagName('p')[0],
// 	inputObj = document.getElementsByTagName('input')[0];;

// paraObj.addEventListener('mousedown', function(){
// 	console.log("mouse is down")
// });
// paraObj.addEventListener('mouseup', function(){
// 	console.log("mouse is up")
// });
// paraObj.addEventListener('click', function(){
// 	console.log("paragraph has been clicked")
// });
// inputObj.addEventListener('select', function(){
// 	console.log("text has been selected")
// });
// inputObj.addEventListener('copy', function(){
// 	console.log("text has been copied")
// });
// inputObj.addEventListener('cut', function(){
// 	console.log("text has been cut")
// });
// inputObj.addEventListener('paste', function(){
// 	console.log("text has been pasted")
// });
// inputObj.addEventListener('focus', function(){
// 	console.log("input is in focus")
// });
// inputObj.addEventListener('blur', function(){
// 	console.log("input is blurred")
// });
// inputObj.addEventListener('contextmenu', function(){
// 	console.log("contextmenu is open")
// });
// inputObj.addEventListener('mouseenter', function(){
// 	console.log("mouse has entered")
// });
// inputObj.addEventListener('mouseleave', function(){
// 	console.log("mouse has left the building")
// });
// inputObj.addEventListener('mousemove', function(){
// 	console.log("mouse has moved")
// });
var spanObj = document.getElementsByTagName('span')[0],
	divObj = document.getElementsByTagName('div'),
	h1Obj = document.getElementsByTagName('h1')[1];


	divObj[0].addEventListener('mouseenter', function(){
		h1Obj.innerText = 'GOOD LUCK!';
		h1Obj.style.backgroundColor = '';


	});
	divObj[6].addEventListener('mouseleave', function(){
		h1Obj.innerText = 'ALMOST THERE';
		h1Obj.style.backgroundColor = 'BLUE';
	});
		divObj[7].addEventListener('mouseleave', function(){
		h1Obj.innerText = 'YOU WIN';
		h1Obj.style.backgroundColor = 'green';
	});
	spanObj.addEventListener('mouseenter', function(){
		h1Obj.innerText = 'GAME OVER';
		h1Obj.style.backgroundColor = 'red';

	});