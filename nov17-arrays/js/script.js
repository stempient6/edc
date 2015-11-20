/* js goes here */
var	shiftBtn = document.getElementById('shiftBtn'),
	unshiftBtn = document.getElementById('unshiftBtn'),
	pushBtn = document.getElementById('pushBtn'),
	reverseBtn = document.getElementById('reverseBtn'),
	sortBtn = document.getElementById('sortBtn'),
	joinBtn = document.getElementById('joinBtn'),
	popBtn = document.getElementById('popBtn'),
	sliceBtn = document.getElementById('sliceBtn'),
	spliceBtn = document.getElementById('spliceBtn'),
	outBox = document.querySelector('#output input'),
	theArray = [];
	unshiftBtn.addEventListener('click', unshiftArr);
	pushBtn.addEventListener('click', pushArr);
	reverseBtn.addEventListener('click', reverseArr);
	sortBtn.addEventListener('click', sortArr);
	joinBtn.addEventListener('click', joinArr);
	popBtn.addEventListener('click', popArr);
	sliceBtn.addEventListener('click', sliceArr);
	spliceBtn.addEventListener('click', spliceArr);
	shiftBtn.addEventListener('click', shiftArr);
	function printArr(){
		outBox.value = theArray;
	}
	function pushArr(){
		var pushVal = this.previousElementSibling.value;
		theArray.push(pushVal);
		printArr();
		this.previousElementSibling.value = '';
	}
	function sortArr(){
		var sortVal = this.previousElementSibling.value;
		if(sortVal === 'numbers'){
			theArray.sort(comparison);
			printArr();
		}else{
		theArray.sort();
		printArr();
		//this.previousElementSibling.value = '';
		}
	}
	function unshiftArr(){
		var unshiftVal = this.previousElementSibling.value;
		theArray.unshift(unshiftVal);
		printArr();
		this.previousElementSibling.value = '';
	}
		function reverseArr(){
		theArray.reverse();
		printArr();
	}
		function popArr(){
		var popVal = theArray.pop();
		this.previousElementSibling.value = popVal;
		printArr();
	}
		function sliceArr(){
		var val = this.previousElementSibling.value;
		val = val.split(',');
		newArray = theArray.slice(val[0], val[1]);
		this.previousElementSibling.value = newArray;
		printArr();
	}
		function spliceArr(){
		var val = this.previousElementSibling.value;
		val = val.split(',');
		//for(var i = 0; i> val.length; i++);
		var newArray = theArray.slice(val[0], val[1], val[2]);
		this.previousElementSibling.value = newArray;
		printArr();
	}
		function joinArr(){
		var val = this.previousElementSibling.value;
		var str = theArray.join(val);
		outputBox.value = str;
		
	
	}
		function shiftArr(){
		var shiftVal = theArray.shift();
		this.previousElementSibling.value = shiftVal;
		printArr();
	}
	function comparison(x, y){
		return x - y;
	}
//console.log(outBox);