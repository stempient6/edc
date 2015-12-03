/* js goes here */
var promo1plan = 'Basic',
	promo1price = 3.99,
	promo1space = 100,
	promo1speed = 1000,
	promo1sites = 1;
var promo2plan = 'professional',
	promo2price = 5.99,
	promo2space = 250,
	promo2speed = 2500,
	promo2sites = 5;
var promo3plan = 'ulitmate',
	promo3price = 19.99,
	promo3space = 1000,
	promo3speed = 5000,
	promo3sites = 10;

var promo1 = {
	plan: 'Basic',
	price: 3.99,
	space: 100,
	speed: 1000,
	sites: 1
};
var promo2 = {
	plan: 'professional',
	price: 5.99,
	space: 250,
	speed: 2500,
	sites: 5
};
var promo3 = {
	plan: 'ulitmate',
	price: 19.99,
	space: 1000,
	speed: 5000,
	sites: 10

};
var trainRide = {
	price: 40.00,
	groupRate: 120,
	date: 'December 20th',
	destination: 'Yosemite',
	seniorDiscount: true,
	testMethod: function(x){
		return x;
	},
	checkPriceDifference: function(){
		return this.groupRate - this.price;
	}
};
var person = {
	name: 'Daniel',
	age: 5,
	job: 'being good',
	greeting: function (x){
 		alert("Hello "+ x +", my name is "+ this.name +", I'm "+ this.age +" years old, and I am "+ this.job +".");
	}

}

person.greeting("Daddy");



trainRide.upgrades = ['first class', 'coach', 'caboose'];
trainRide.seniorDiscount = false;
trainRide.otherRides = {
	price: 80.00,
	date: 'July 4th',
	destination: 'New Orleans',
	seniorDiscount: true,
	upgrades: ['first class', 'coach', 'caboose']

};
delete trainRide.seniorDiscount;
console.log(trainRide);
var propExist = 'price' in trainRide;
	console.log(trainRide.testMethod(trainRide));


//console.log('The '+ promo1.plan +' Hosting Plan is $'+promo1.price +' per month giving you '+ promo1.sites +' site.');
var scanPromos = function(){
 
 var mainObj = document.getElementsByTagName('main')[0];

 var newUl = document.createElement('ul');
 	mainObj.appendChild(newUl);

 	promo1.discountMonth = [7, 12];
 		promo1.discountMonth = [12];

 	for(var key in arguments[0]){
 		//console.log(promo1[key]);
 		
 	}
 	// for(var i = 0; i < promo1.discountMonth.length; i++){
 	// 		console.log(promo1.discountMonth[i]);
 	// 	}

}(promo1);