var textArea = document.getElementsByTagName('textarea')[0];
var keyOutput = document.querySelector('main div p:first-child');
var timeOutput = document.querySelector('main p:first-child');
var compareText = document.getElementById('compare');
var characterNum = 0;
var deleteNum = 0;
var keyTimer;
var timeStart = 30,
	 timeLeft = timeStart;
var pageOneBtn = document.getElementById('page1'),
	pageTwoBtn = document.getElementById('page2'),
	pageThreeBtn = document.getElementById('page3'),
	pageFourBtn = document.getElementById('page4'),
	mainObj = document.getElementsByTagName('main')[0];
var pageOne =
	'<h5 id="compare">Lets compare stuff</h5>'+
		'<p></p>'+
		'<textarea name="" id="" cols="50" rows="20"></textarea>'+
		'<div>'+
			'<p>0</p>/<p>0</p>'+
		'</div>';
var pageThree = 
	'<h1>Tell Us About Yourself</h1>'+
		'<form action="#" method="post">'+
		    '<div>'+
		         '<label for="name">Text Input:</label>'+
		         '<input type="text" name="name" id="name" value="" tabindex="1" />'+
		    '</div>'+

		   ' <div>'+
		         '<h4>Radio Button Choice </h4>'+

		         '<label for="radio-choice-1">Choice 1</label>'+
		         '<input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />'+

				 '<label for="radio-choice-2">Choice 2</label>'+
		         '<input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />'+
		    '</div>'+

			'<div>'+
				'<label for="select-choice">Select Dropdown Choice:</label>'+
				'<select name="select-choice" id="select-choice">'+
					'<option value="Choice 1">Choice 1</option>'+
					'<option value="Choice 2">Choice 2</option>'+
					'<option value="Choice 3">Choice 3</option>'+
				'</select>'+
			'</div>'+
			
			'<div>'+
				'<label for="textarea">Textarea:</label>'+
				'<textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>'+
			'</div>'+
			
			'<div>'+
			    '<label for="checkbox">Checkbox:</label>'+
				'<input type="checkbox" name="checkbox" id="checkbox" />'+
		    '</div>'+

			'<div>'+
			    '<button id="page4">Submit</button>'+
		    '</div>'+
		'</form>';
var pageTwo = 
	'<h1>About Us</h1>'+
	'<div class="cta"><p>This is a picture of our company taken at night. If we would have used better lighting you would see an entire warehouse.</p></div>'+
	'<footer>Copyright 2015</footer>';
pageOneBtn.addEventListener('click', function(){

	mainObj.innerHTML = pageOne;
});
pageTwoBtn.addEventListener('click', function(){

	mainObj.innerHTML = pageTwo;
});
pageThreeBtn.addEventListener('click', function(){
	mainObj.innerHTML = pageThree;
});
pageFourBtn.addEventListener('click', function(){
	mainObj.innerHTML = pageTwo;
});
textArea.addEventListener('keypress', getCharacter);
textArea.addEventListener('keyup', checkDelete);
textArea.addEventListener('focus', keyTimer);

function checkDelete(event) {
    if(event.which == 46 || event.which == 8){
        deleteNum = deleteNum + 1;
        delOutput.textContent = deleteNum;
        //console.log('delete');
    }
}

function getCharacter(event){
    var character;
    if (event.which == null) {
        character = String.fromCharCode(event.keyCode);
    }else if(event.which != 0 && event.keyCode != 0) {
        character = String.fromCharCode(event.which);
    }else{
        console.log('special key');
    }
    countCharacters();
}

function countCharacters(){
    characterNum = characterNum + 1;
    keyOutput.textContent = characterNum;
    console.log(keyOutput);
}
function keyTimer(){
	keyTimer = setInterval(countDown, 100);
}
function countDown(){
	if(timeLeft === 0){
		clearTimeout(keyTimer);
		timeOutput.textContent = "Times Up";
		wrapUp();
	}else{
		timeOutput.textContent = timeLeft;
		timeLeft--;
	}
}
function wrapUp(){
	textArea.readOnly = true;
	var userText = textArea.value;
	console.log(textArea.value);
}