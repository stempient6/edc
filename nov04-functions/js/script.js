/* js goes here */
// var bodyObj = document.body,
// 	divObj = document.querySelector('main div'),
// 	shipObj = document.querySelector('main div:last-child');
// 	//console.log(bodyObj);

// 	bodyObj.addEventListener('keydown', function(evt){
// 		var shipX = parseInt(shipObj.style.left);
// 		var shipY = parseInt(shipObj.style.top);
// 		if(evt.keyCode === 37){
// 			shipX = shipX - 5;
// 			shipObj.style.left = shipX+'%';
// 		}else if(evt.keyCode === 39){
// 			shipX = shipX + 5;
// 			shipObj.style.left = shipX+'%';
// 		}else if(evt.keyCode === 38){
// 			shipY = shipY - 5;
// 			shipObj.style.top = shipY+'%';
// 		}else if(evt.keyCode === 40){
// 			shipY = shipY + 5;
// 			shipObj.style.top = shipY+'%';
// 		}
// 	});
// 	bodyObj.addEventListener('click', function(evt){
// 		//console.log(evt);
// 			var mouseX = evt.x,
// 				mouseY = evt.y;
// 			//console.log(mouseX+","+mouseY);
// 			moveBall(mouseX, mouseY);
// 	});
// 	function moveBall(x, y){
// 		divObj.style.left = x+'px';
// 		divObj.style.top = y+'px';
		
// 		divObj.style.backgroundColor = "hsla("+(y+x)+", 50%, 50%, .5)";
// }
// 	function makeShip(){
// 		var shipW = '200px',
// 			shipH = '50px',
// 			shipRadi = '0',
// 			shipClr = "hsla(250, 50%, 50%, .25)",
// 			shipX = '50%',
// 			shipY = '75%',
// 			shipPos = 'absolute',
// 			shipTrans = 'translate3d(-50%, -50%, 0)',
// 			shipSlide = 'all 100ms linear';

// 		shipObj.style.width = shipW;
// 		shipObj.style.height = shipH;
// 		shipObj.style.backgroundColor = shipClr;
// 		shipObj.style.borderRadius = shipRadi;
// 		shipObj.style.position = shipPos;
// 		shipObj.style.top = shipY
// 		shipObj.style.left = shipX;
// 		shipObj.style.transform = shipTrans;
// 		shipObj.style.transition = shipSlide;

// 	}
// 	function makeBall(){
// 		var ballW = '50px',
// 			ballH = '50px',
// 			ballRadi = '100%',
// 			ballClr = 'red',
// 			ballX = '100px',
// 			ballY = '100px',
// 			ballPos = 'absolute',
// 			ballTrans = 'translate3d(-50%, -50%, 0)',
// 			ballSlide = 'all 100ms ease-in-out';

// 		divObj.style.width = ballW;
// 		divObj.style.height = ballH;
// 		divObj.style.backgroundColor = ballClr;
// 		divObj.style.borderRadius = ballRadi;
// 		divObj.style.position = ballPos;
// 		divObj.style.top = ballY
// 		divObj.style.left = ballX;
// 		divObj.style.transform = ballTrans;
// 		divObj.style.transition = ballSlide; 
// 	}
// makeBall();
// makeShip();
var payBtn = document.getElementById('pay'),
	mainObj = document.getElementsByTagName('main')[0];

payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff = 
		'<form>'+
		'<fieldset>'+
		'<label for="name">'+
		'<span>name</span>'+
		'<div>'+
		'<input type="text" id="firstname" placeholder="first">'+
		'<input type="text" id="lastname" placeholder="last">'+
		'</div>'+
		'</label>'+
		'<label for="addr">'+
		'<span>address</span>'+
		'<div>'+
		'<span>'+
		'<input type="text" id="address" placeholder="address">'+
		'</span>'+
		'<span>'+
		'<input type="text" id="city" placeholder="city">'+
		'<select name="state" id="state">'+
		'<option value="CA">California</option>'+
		'<option value="FL">Florida</option>'+
		'</select>'+
		'<input type="text" id="zip" placeholder="zip">'+
		'</span>'+
		'</div>'+
		'</label>'+
		'</fieldset>'+
		'<fieldset>'+
		'<label for="card">'+
		'<span>credit card</span>'+
		'<div>'+
		'<input type="text" maxlength="4">'+
		'<input type="text" maxlength="4">'+
		'<input type="text" maxlength="4">'+
		'<input type="text" maxlength="4">'+
		'</div>'+
		'</label>'+
		'</fieldset>'+
		'<fieldset>'+
		'<label for="pay">'+
		'<span>amount</span>'+
		'<div>'+
		'<input type="text" placeholder="$">'+
		'<input type="submit" value="Submit">'+
		'</div>'+
		'</label>'+
		'</fieldset>'+
		'</form>';
	mainObj.innerHTML = formStuff;

	var formObj = document.getElementsByTagName('form')[0],
		formEls = formObj.length,
		submitBtn = formObj.querySelector('input[type="submit"]');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		getInfo();
	});

	function getInfo(){
		var formInfo,
			formArr = [];
		for(var i = 0; i < formEls-1; i++){
			formInfo = formObj.elements[i].value;
			if(!!formInfo){
				formArr.push(formInfo);
			}
		}
		thankYou(formArr);
	}
	function thankYou(x){
		alert('Thank you '+ x[0] + " " + x[1] + " for your money.");
	}
}