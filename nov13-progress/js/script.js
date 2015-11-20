/* js goes here */
(function(){
var bodyObj = document.body,
	navObj = document.getElementsByTagName('nav')[0],
	mainObj = document.getElementsByTagName('main')[0],
	progressBar = document.getElementById('progressBar'),
	animObjs = document.getElementsByClassName('animWrap'),
	bodyH = 0,
	mainH = 0;

	
	window.addEventListener('resize',checkDims);
	window.addEventListener('scroll', checkScroll);

function checkDims (){
	bodyH = document.body.clientHeight;
	mainH = mainObj.clientHeight;

}
checkDims();

function checkScroll(){
	var scrollPos = window.scrollY;
	var docUnit = Math.ceil( (100 / mainH)*100)/100;
	var docPos = scrollPos * docUnit;
	if(docPos<= 110){
		progressBar.style.width = docPos + '%';
	}
	addAnim(scrollPos);
}
function addAnim(x){
	var winH = window.innerHeight,
		animArr = [];
	for (var i = 0; i < animObjs.length; i++){
		animArr.push(animObjs[i].offsetTop);
	};
	for (var i = 0; i < animArr.length; i++){
		if(x > animArr[i] - winH){
			animObjs[i].classList.add('animation');			
		}else{
			animObjs[i].classList.remove('animation');	
		}
	}
}	

})();