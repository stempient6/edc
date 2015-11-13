/* js goes here */
var clickbtn = document.getElementsByTagName('button')[0],
	inputsEl = document.getElementsByTagName('input'),
	pTarget = document.getElementById('results');

	 clickbtn.addEventListener('click', disableMe);
	 inputsEl[1].addEventListener('click', capText);
function getUsername(){
 var firstName = prompt('Whats your first name?');
	
getUsername();
console.log(firstName);
}
 function disableMe(){
 	for (var i = 0; i < inputsEl.length; i++) {
		
		if(inputsEl[i].disabled){
			inputsEl[i].disabled = false;
		}else{
			inputsEl[i].disabled = true;
		}
	};
	inputsEl[0].value = ''; 
 }
 function getRand(x){
 	var y = Math.floor(Math.random() * 100) + 1;
 	return x * y; 
}
 function capText(){
  	var infoVal = inputsEl[0].value;
  		if(!!infoVal && !isNaN(infoVal)){
 // 		pTarget.textContent = infoVal;
 			pTarget.textContent = getRand(infoVal);
  			disableMe();  		 		
  	}else{
  		pTarget.innerHTML = infoVal + ' is not a number.<br> Please try again';
  		inputsEl[0].value = '';
  	}
 }
