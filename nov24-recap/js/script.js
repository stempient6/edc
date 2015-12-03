/* js goes here */
 var iconObj = document.getElementsByTagName('i')[0],
 	 mainObj = document.getElementsByTagName('main')[0],
 	 navObj = document.getElementsByTagName('nav')[0],
	 headerObj = document.getElementsByTagName('header')[0],
	 headerBoxObj = document.getElementsByClassName('headerBox'),
	 bodyObj = document.body,
	 headObjHeight = headerObj.clientHeight;
	

 	 iconObj.addEventListener('click', function(){
 	 	console.log(iconObj);
 	 	headerObj.classList.toggle('headerObj');
 		bodyObj.classList.toggle('bodyObj'); 	 	
 	 	headerBoxObj[0].classList.toggle('headerBoxObj'); 
 	 	iconObj.classList.toggle('iconObj'); 
 	 	mainObj.classList.toggle('mainObj');	 	
 	 });

 	 
window.addEventListener('scroll', scroller);

function scroller(event){
    //console.log(window.scrollY);
    var ten = 10;
    fixnav(event);
}

/**
*Function fetches css applied styles.
*    x needs to be a js object
*    y needs to be a css property
*/
function getRecStyle(x, y){
    return parseInt(window.getComputedStyle(x, null).getPropertyValue(y));
}

/**
*Function converting px to vw / vw to px.
*    num needs to be an integer
*
*/
function calcUnit(num){
    return (document.documentElement.clientWidth / num);
}

function fixnav(){
    var scrolldis = window.scrollY;
    //console.log(scrolldis);
    if (scrolldis > 560){
        console.log('yes it has');
        navObj.classList.add('fix_nav');
        //mainObj.style.paddingTop = (calcUnit(10)+navObj.clientHeight) + 'px'; 
    }else{
        navObj.classList.remove('fix_nav');
        //mainObj.style.paddingTop = '10vw';
    }
}

console.log(navObj);