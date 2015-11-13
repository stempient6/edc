var bodyObj = document.body,
	mainObj = document.getElementsByTagName('main')[0],
	timerId = window.setTimeout(displayLogin, 5000);
var formMarkup = '<form action="">'+
				'<input placeholder="usename" type="text"><small></small><input placeholder="password" type="password"><small></small>'+
				'<input placeholder="Email Address" type="email"><small></small>'+
				'<input placeholder="Phone Number" type="text"><small></small>'+
				'<button>Submit</button>'+
				'</form>';


bodyObj.addEventListener('mousemove', checkDim);

function checkDim(evt){
    var mouseX = evt.clientX,
        mouseY = evt.clientY,
        winW = window.innerWidth,
        winH = window.innerHeight;
  var hue = (mouseY / winH) * 360;
  var lum = (mouseX / winW) * 100;
  bodyObj.style.backgroundColor = "hsla("+ hue +", 50%, "+ lum +"%, 1)";
	//console.log('width: ' + winW + ', height: ' + winH + ', mouseX: ' + mouseX + ', mouseY: ' + mouseY);

}


	

function displayLogin(){
	clearTimeout(timerId);
 	mainObj.innerHTML = formMarkup;
 	var inputObjOne = document.getElementsByTagName('input')[0],
		inputObjTwo = document.getElementsByTagName('input')[1],
		formObj = document.getElementsByTagName('form')[0],
		buttonObj = document.getElementsByTagName('button')[0],
		userObj = document.getElementById('outPut');



	
buttonObj.addEventListener('click', function(evt){
	// var inputOneText = inputObjOne.value;
	// var inputTwoText = inputObjTwo.value;

	 evt.preventDefault();
	// userObj.textContent = (inputOneText + ' ' + inputTwoText);
	
	var els = formObj.elements,
		len = els.length - 1,
		arr = [];
		for(var i = 0; i < len; i++) {
			if(!els[i].value){
				els[i].nextElementSibling.innerHTML = 'Please fill in the Box';
		
			
		}else{
			arr.push(els[i].value);
			els[i].nextElementSibling.innerHTML = '';
		}
			
			
		};
			userObj.textContent =(arr);
			inputObjOne.value = '';
			inputObjTwo.value = '';
	});
 }
