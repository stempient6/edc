/* js goes here */
// var loopNum = prompt("What's your phone number?"),
// isNum;

// if(!!loopNum){
// 	isNum = + loopNum;	
// 	if(!NaN){
// 		//console.log(isNum);
// 		for(var i = 1; i <= isNum; i++){
// 			//console.log(i);
// 			var result = "";
// 			if(i % 3 === 0){
// 				result += "Fizz";

// 			}
// 			if(i % 5 === 0){
// 				result += " Buzz";
// 		}
// 		document.write('<p>' + (result || i) +'</p>');
// 		}
// 	}
// }
var firstName = prompt('What is your first name?'),
 	middleName = prompt('What is your middle name?'),
 	lastName = prompt('What is your last name?');
  		document.write("<h1>" + firstName + " " + middleName + " " +  " " + lastName +"</h1>");
var username,
	password,
	online = confirm('are you online?');
	if (!online) {
		username = prompt('username?');
		password = prompt('password?');
		document.write(username + " " + password)

	};
 
