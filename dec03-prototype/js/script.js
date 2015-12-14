/* js goes here */
'use strict';

var Recipe = function(img, title, time, temp, ingredients){
	this.img = img,
	this.title = title,
	this.time = time,
	this.temp = temp,
	this.ingredients = ingredients;
	this.iLove = function iLove(){
		console.log('I love '+ this.title)
	};
};
var stroganoff = new Recipe('img/stroganoff.jpg','Beef Stroganoff', 20, 350, ['beef', 'noodles', 'sour cream', 'flour']);
var breakfast = new Recipe('img/breakfast.jpg', 'Breakfast', 15, 350, ['eggs', 'bacon', 'bread', 'milk']);
var pizza = new Recipe('img/pizza.jpg', 'pizza', 20, 400, ['itlian sausage', 'mushrooms', 'flour', 'sause']);
var steak = new Recipe('img/steak.jpg','steak', 10, 450, ['steak', 'mushrooms', 'pepper', 'A1']);
var spaghetti = new Recipe('img/spaghetti.jpg','spaghetti', 240, 220, ['itlian sausage', 'mushrooms', 'sause', 'onions']);

//console.log(pizza);
var printRecipe = function(){	
	Recipe.prototype.card = 'pink';
	Recipe.prototype.iLove = function(){
		console.log('I love'+this.title)
	}

	for(var i = 0; i < arguments.length; i++){
		var mainObj = document.getElementsByTagName('main')[0];
		var headObj = document.getElementsByClassName('img');
		var recipeCard = document.createElement('div');
		//arguments[i].iLove();
		//console.log(arguments[i]);
		var recipe = 
			'<div class="img"></div>' +
			'<section>' +
			'<h1>'+ arguments[i].title +'</h1>'+
			'<ol>'+
				'<li>Cooking Time: '+ arguments[i].time +'</li>'+
				'<li>Cooking Temp: '+ arguments[i].temp +'</li>'+
			'</ol>'+
			'<ul>';
			for(var j = 0; j < arguments[i].ingredients.length; j++){
				recipe += '<li>'+ arguments[i].ingredients[j] +'</li>';		
				}
			recipe+= '</ul>' + '</section>';
		recipeCard.className = 'recipeCard';

		mainObj.appendChild(recipeCard).innerHTML = recipe;

	}
			for(var k = 0; k < headObj.length; k++){
			headObj[k].style.backgroundImage = 'url('+arguments[k].img+')';
			
		}
}(stroganoff, breakfast, pizza, steak, spaghetti);

