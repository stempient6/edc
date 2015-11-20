/* js goes here */

var accEls = document.getElementsByTagName('li'),
	bodyObj = document.body,
	lineheight = getStyle(bodyObj, 'line-height');
	//console.log(accEls);
function getStyle(el, prop){
	return window.getComputedStyle(el).getPropertyValue(prop);
}
	for(var i = 0; i < accEls.length; i++){
		var pHeight = accEls[i].firstElementChild.clientHeight;
		var $elP = accEls[i].firstElementChild;
	//	var sutEl =document.getElementsByClassName('dropper');
		if(pHeight > parseInt(lineheight)*2){
			$elP.style.height = parseInt(lineheight) * 2 + 'px';
			$elP.style.overflow = 'hidden';
			$elP.style.transition = 'all 250ms ease-in-out';
			$elP.classList.add('dropper');
			accEls[i].addEventListener('mouseenter', function(){
			this.firstElementChild.style.height = this.firstElementChild.scrollHeight + 'px';
			this.firstElementChild.style.overflow = 'hidden';
			});
			accEls[i].addEventListener('mouseleave', function(){
			this.firstElementChild.style.height = parseInt(lineheight) * 2 + 'px';
			this.firstElementChild.style.overflow = 'hidden';
			});
	}		

}
