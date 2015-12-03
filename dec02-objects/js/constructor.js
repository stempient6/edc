var person = 'Tom';
var anotherPerson = person;
person = 'Stempien';

// console.log(person);
// console.log(anotherPerson);
var person2 = {
	name: 'Daniel'
};
var anotherPerson2 = person2;
person2.name = 'Stempien';
// console.log(person2.name);
// console.log(anotherPerson2.name);
function Promo(plan, price, speed, space, site){
	this.plan = plan;
	this.price = price;
	this.speed = speed;
	this.space = space;
	this.site = site;
}
var promo1 = new Promo('basic', 3.99, 1000, 100, 1);
var promo2 = new Promo('Profeshional', 10.99, 5000, 500, 5);
var promo3 = new Promo('Ultimate', 23.99, 10000, 1000, 10);


	
var scanPromos = function(){

	var mainObj = document.querySelector('main');
	var output = '<ul>'
		for(var i = 0; i < arguments.length; i++){
			for(var key in arguments[i]){
				//console.log(arguments[i][key]);

				output +='<li> Promo key: '+ key +' Promo value: '+ arguments[i][key] +'</li>';

		}
	}
	// for(var key in arguments[2]){
	// 	console.log(key);
	// 	console.log(promo3[key]);
		

	
	output +='</ul>';
mainObj.innerHTML = output;
}(promo1, promo2, promo3);