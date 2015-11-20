/* js goes here */
(function(){
	window.addEventListener('scroll', scrollFunc);
	function scrollFunc(evt){
		var num = 10;
		fixNav(num);
	}

	var bodyObj = document.body,
		hdrObj = document.getElementsByTagName('header')[0],
		mainObj = document.getElementsByTagName('main')[0];
			/**
		*	Function fetches css applied styles.
		* 	x needs to be a js object.
		*	y needs to be a css property.
		*/
	function reqStyle(x, y){
		return parseInt(window.getComputedStyle(x, null).getPropertyValue(y));
	}
		/**
		*	Function converts vw to px / px to vw.
		* 	num needs to be an integer
		*	
		*/
	function calcUnit(num){
		return (document.documentElement.clientWidth / num);
	}
	function fixNav(x){
		var scrollDist = window.scrollY;
		if(scrollDist > reqStyle(bodyObj, 'padding-top')){
			hdrObj.classList.add('fixie');
			mainObj.style.paddingTop = (calcUnit (10) + hdrObj.clientHeight) + 'px';		
		}else{
			hdrObj.classList.remove('fixie');
			mainObj.style.paddingTop = '10vw';
		}
	}
		window.addEventListener('resize', checkDims);

	function scrollFunc(evt){
		//fixNav(); //currently already exists in scrollFunc()
		colorChange();
	}

	var docH = 0;
	function checkDims(){
		docH = document.documentElement.scrollHeight;
	}
	checkDims();

	function colorChange(){
		var winH = window.innerHeight;
		var scrollDist = window.scrollY;
		var degreeCon = Math.ceil( (360 / (docH - winH)) * 100) / 100;
		var hue = Math.round(degreeCon * scrollDist);
		bodyObj.style.backgroundColor = 'hsla('+hue+', 30%, 50%, 1)';
		//console.log(hue);
	}
})();