
var images = document.getElementsByClassName('thm'); 

 for (var i = 0; i < images.length; i++) {
 	images[i].addEventListener('click', function(evt){ 	
 		console.log(evt);
 		var loRes = evt.target.src; 	
 	 	var overLay = document.querySelector('div.overlay');
 	 	var hiRes = document.createElement('img');
 	 	var spinner = document.createElement('i');
 	 	var close = document.createElement('h1');

 	 	overLay.style.display = 'block';
 	 	hiRes.src = loRes.replace('85/85', '3500/2000');
 	 	overLay.appendChild(hiRes);
 	 	close.innerHTML = '<i class="fa fa-times-circle-o"></i>';
 	 	spinner.className = 'fa fa-refresh fa-spin';
 	 	overLay.appendChild(spinner);
 	 	overLay.appendChild(close);
 	 	hiRes.addEventListener('load', function(){
 	 		spinner.parentElement.removeChild(spinner);
 	 	});
 	 	close.addEventListener('click', function(){
 	 		console.log('it works');
 	 		overLay.innerHTML = "";
 	 		overLay.style.display = 'none';
 	 	});
 });
};

