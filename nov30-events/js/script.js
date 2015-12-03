/* js goes here */

var imgGrid = document.querySelector('#art-eliminator ul');
 	imgGrid.addEventListener('click', function(evt){
 		var howMany = this.childElementCount;
 		console.log(this.childElementCount);
 		if(evt.target.tagName === 'IMG'){
 		if(howMany > 1){
 			var removeTarget = evt.target.parentElement;
 			
 		removeTarget.parentElement.removeChild(removeTarget);
		 	}else{
		 		var photoTitle = evt.target.alt;
		 		document.querySelector('#art-eliminator p').innerHTML = photoTitle;
		 	}
	 	}
 	});
 	// document.querySelector('#art-preview ul').addEventListener('mouseenter', function(evt){
 	// 		console.log(evt);


 	// });
 	 	document.querySelector('#art-preview ul').addEventListener('mouseover', function(evt){
 			if(evt.target.tagName === 'IMG'){
 				var myDiv = document.createElement('div');
 				myDiv.className = 'preview';
 				evt.target.parentElement.appendChild(myDiv);

 			var myImg = document.createElement('img');
 			var imgUlr = evt.target.src;
 			//console.log(imgUlr);
 			myImg.src = imgUlr.replace('85/85', '500/500');
 			myDiv.appendChild(myImg);
 			//console.log(myImg.src);
 			evt.target.addEventListener('mouseout', function mouseoutFunction(e){
 				var myPreview = e.target.parentElement.querySelector('div.preview');
 				myPreview.parentElement.removeChild(myPreview);
 				this.removeEventListener('mouseout', mouseoutFunction);
 				//myPreview.remove.this;
			});
		}

 	});
	 	 	document.querySelector('#art-follow ul').addEventListener('contextmenu', function(evt){
	 	 		evt.preventDefault();
 			if(evt.target.tagName === 'IMG'){
 				var myDiv = document.createElement('div');
 				myDiv.className = 'preview';
 				evt.target.parentElement.appendChild(myDiv);

 			var myImg = document.createElement('img');
 			var imgUlr = evt.target.src;
 			//console.log(imgUlr);
 			myImg.src = imgUlr.replace('85/85', '250/250');
 			myDiv.style.left = evt.offsetX + 15 + 'px';
			myDiv.style.top = evt.offs
			etY + 15 + 'px';
 			myDiv.appendChild(myImg);
 			//console.log(myImg.src);
 			evt.target.addEventListener('mouseout', function mouseoutFunction(e){
 				var myPreview = e.target.parentElement.querySelector('div.preview');
 				myPreview.parentElement.removeChild(myPreview);
 				this.removeEventListener('mouseout', mouseoutFunction);

 				//myPreview.remove.this;
			});
			evt.target.addEventListener('mousemove',function(f){
				//console.log(f);
				myDiv.style.left = f.offsetX + 15 + 'px';
				myDiv.style.top = f.offsetY + 15 + 'px';


			});
		}

 	});