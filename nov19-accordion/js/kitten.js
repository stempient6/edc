var kittens = Math.ceil(Math.random() * 30),
	litterBox = document.getElementById("litterbox"),
	guess = document.getElementsByTagName('input')[0],
	subMit = document.getElementsByTagName('button')[0],
	reTry = document.getElementsByTagName('button')[1],
	mainCont = document.getElementById('mainContainer'),
	bodyObj = document.body;
guess.addEventListener('keydown', enterEvent);
function enterEvent(event){
	var guess = document.getElementsByTagName('input')[0],
		subMit = document.getElementsByTagName('button')[0];
                if(event.keyCode === 13) {
                        subMit.click();
                   }
            }

 reTry.addEventListener('click', litter);
 subMit.addEventListener('click', function(){
 	console.log(parseInt(guess.value));
 	if(parseInt(guess.value) + 1 === kittens){
 		console.log('correct');
 		bodyObj.style.backgroundColor = 'green';
 		mainCont.innerHTML += '<img class="displayImg" src="img/correct.png" height="auto" width="150" alt="">';
 	}else{
 		console.log('nope');
 		mainCont.innerHTML += '<img class="displayImg" src="img/incorrect.png" height="auto" width="150" alt="">';
 		bodyObj.style.backgroundColor = 'red';
 	}
 	guess.value = '';
 });

 function litter(){
 	kittens = Math.ceil(Math.random() * 30);
 	litterBox.innerHTML = '';
 	for(var i = 1;i < kittens; i++){
 	litterBox.innerHTML += '<img class="trainimg" src="img/train.png" height="auto" width="100" alt="">';
	
	}
}
function cleargame(){
	litterBox.innerHTML = '';
	guess.value = '';
	
}
function reLoad(){
	location.reload(); 
}
console.log(kittens);
console.log(guess.value);
 litter();
// function getRandom() {
//     var x = Math.ceil(Math.random() * 50);
 
//  for (var i = 1; i < x; i++){
//    var div = document.createElement("div");
//    divKit.appendChild(div);
//   }
// }
