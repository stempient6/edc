/* js goes here */
// var namePrompt =prompt('What is your first name') + ' ';
// 	namePrompt += prompt('What is your middle name') + ' ';
// 	namePrompt += prompt('What is your last name'
// 		);
 // var numberObj = prompt('Please enter a number greater than 10');
 //  function docRight (){
 //  	console.log(numberObj);
 //  	spanObj.textContent = parseInt(numberObj) + ' Thank You';
 //  }

 // if (parseInt(numberObj) < 10){
 // 	var spanObj = document.getElementById('user');
 // 	numberObj = prompt('Please enter a number higher than 10')
 // 	docRight();
 // }else{

 // 	docRight();
 // }


//var welcome = 'Hi ' +namePrompt+', welcome back to our site';
// var foods = ['oranges', 'eggs', 'bacon', 'milk', 'sausage'];
// 	foods.splice(2, 1, 'beanut butter');
// 	//foods.push('beanut butter');
// 	for(i = 0; i < foods.length; i++){

// 		//console.log(foods[i]);
// 	}
// var helpMe = (Math.floor(Math.random() * 11));
//  console.log(helpMe);
var userObj = document.getElementById('user');
localStorage.setItem('firstName', 'Tom');
var userName =  localStorage.getItem('firstName');
userObj.textContent = userName;
localStorage.removeItem('firstName');
 	if(localStorage.addName){
 		addName();
 	}
function addName(){
	return
}