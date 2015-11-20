/* js goes here */
//outBox = outBox = document.querySelector('#output input'),,

var imgObj = document.getElementsByTagName('img'),
	//mainObj = document.getElementsByClassName('mainContainer')[1],
	btnObj = document.getElementsByTagName('button'),
	sliderObj = document.getElementsByClassName('slider');
	//console.log(btnObj);

	// imgObj.addEventListener('mouseenter', function(){
	// 	imgObj.style.transform  = "scale(2, 2)";
	// 	imgObj.style.transition = 'all 200ms ease-in-out';

	// });
	// imgObj.addEventListener('mouseleave', function(){
	// 	imgObj.style.transform  = "scale(1, 1)";
	// 	imgObj.style.transition = 'all 200ms ease-in-out';

	// });
	// btnObj.addEventListener('mouseenter', function(){
	// 	btnObj.style.color = 'white';
	// 	sliderObj.style.top  = '0%';
	// 	sliderObj.style.transition = 'all 200ms ease-in-out';
	// });
	// 	btnObj.addEventListener('mouseleave', function(){
	// 	btnObj.style.color = 'black';
	// 	sliderObj.style.top  = '100%';
	// 	sliderObj.style.transition = 'all 200ms ease-in-out';
	// });



function imgScale(){
    for(var i = 0; i < imgObj.length; i++){
            imgObj[i].addEventListener('mouseenter', function(){
                //console.log('hover');
                   this.style.transform = "scale(1.15)";
                   this.style.transition = "All 500ms ease-in-out";
            });
            imgObj[i].addEventListener('mouseleave', function(){
                //console.log('hover');
                   this.style.transform = "scale(1)";
                   this.style.transition = "All 500ms ease-in-out";
            });
    }    
}
// function buttonAction(){
//     for(var i = 0; i < btnObj.length; i++){
//             btnObj[i].addEventListener('mouseenter', function(){
//                 console.log('hover');
//                   	 sliderObj.style.top  = '0%';
//  					sliderObj.style.transition = 'all 200ms ease-in-out';
//             });
//             btnObj[i].addEventListener('mouseleave', function(){
//                 console.log('hover');
//                   	 sliderObj.style.top  = '110%';
//  					sliderObj.style.transition = 'all 200ms ease-in-out';
//             });
//     }    
// }
imgScale();

 for(var i = 0; i < btnObj.length; i++){
 	btnObj[i].addEventListener('mouseenter', btnObjenter);
 	btnObj[i].addEventListener('mouseleave', btnObjleave);
 }
 function btnObjenter(){
 	this.style.backgroundColor = 'hsla(56, 100%, 1%, 1)';
 	this.style.borderColor = 'black';
 	this.style.color = 'white';
 	var infoWin = this.parentElement.previousElementSibling.lastElementChild;
 	infoWin.style.top = '0%';
 	infoWin.style.transition = 'all 200ms ease-in-out';
 	// var iconObj = this.parentElement.previousElementSibling.lastElementChild.firstElementChild;
 	// iconObj.style.transform = 'rotate(360deg)';
 	// iconObj.style.transition = 'all 400ms ease-in-out';
 	//console.log(iconObj);

 }
 function btnObjleave(){
 	var infoWin = this.parentElement.previousElementSibling.lastElementChild;
 //	var iconObj = this.parentElement.previousElementSibling.lastElementChild.firstElementChild;
 	this.style.backgroundColor = 'hsla(56, 48%, 24%, .5)';
	this.style.borderColor = 'hsla(56, 48%, 15%, 1)';
	this.style.color = 'black';
//	infoWin.style.top = '100%';
// 	infoWin.style.transition = 'all 200ms ease-in-out';
 	// 	iconObj.style.transform = 'rotate(-360deg)';
// 	iconObj.style.transition = 'all 400ms ease-in-out';
 }

  for(var i = 0; i < sliderObj.length; i++){
 	sliderObj[i].addEventListener('mouseenter', sliderObjenter);
 	sliderObj[i].addEventListener('mouseleave', sliderObjleave);
 }
 function sliderObjenter(){
 	var icnObj = this.firstElementChild;
		icnObj.style.transform = 'rotate(360deg)';
		icnObj.style.transition = 'all 400ms ease-in-out';

 }
  function sliderObjleave(){
  	var icnObj = this.firstElementChild;
 		icnObj.style.transform = 'rotate(-360deg)';
		icnObj.style.transition = 'all 400ms ease-in-out';
		this.style.top = '100%';
		this.style.transition = 'all 600ms ease-in-out';
 }