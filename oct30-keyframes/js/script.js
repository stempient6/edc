/* js goes here */
var leftBtn = document.getElementById('left'), 
	rightBtn = document.getElementById('right'),
	hero = document.getElementById('hero'),
	heroDiv = document.getElementById('hero').getElementsByTagName('div');
	var l = 0;
leftBtn.addEventListener('click', function(){

	if(l < heroDiv.length-1){	
	l++;		
		for(var i = 0; i < heroDiv.length+2; i++){
			hero.children[i].classList.remove('active');
		}
	heroDiv[l].classList.add('active');
	
	}
});
rightBtn.addEventListener('click', function(){
	if(l > 0){		
	l--;	
		for(var i = 0; i < heroDiv.length+2; i++){
			hero.children[i].classList.remove('active');
		}
	heroDiv[l].classList.add('active');
	
	}
});






























/////////////////////////////////////////
var guy = document.getElementById('guy'),
	lite = document.getElementsByTagName('span');

	function liteemup(x){
		for(var i = 0; i < lite.length; i++){
				x.parentNode.children[i].classList.remove('lit');
			}
			x.classList.add('lite');
	}
//	console.log(lite);
	for(var i = 0; i < lite.length; i++){
//		console.log(lite[i]);
		lite[i].addEventListener('click', function(){
//	 		console.log(this);
	 		if(this === lite[0]){
//	 			console.log('first');
				liteemup(this);
				guy.style.animationPlayState = 'paused';
				

	 		}else if(this === lite[1]){
//	 			console.log('slow');
				liteemup(this);
				guy.style.animationPlayState = 'running';
				guy.style.animationDuration = '2s';
				
				for(var i = 0; i < lite.length; i++){
				this.parentNode.children[i].classList.remove('lit');
				}
				this.classList.add('lit');
	 		}else{
//	 			console.log('go');
				liteemup(this);
				guy.style.animationPlayState = 'running';
				guy.style.animationDuration = '.15s';
				
				for(var i = 0; i < lite.length; i++){
				this.parentNode.children[i].classList.remove('lit');
				}
				this.classList.add('lit');

	 		}
		});
	}