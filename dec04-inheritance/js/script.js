/* js goes here */
'use strict';

var Vehicle = function(make, model){
	this.make = make;
	this.model = model;
	this.miles = 0;
	this.last_oil_change = 0;
};

Vehicle.prototype.drive = function(miles){
	this.miles += miles;
	return this; //return the object
}
Vehicle.prototype.change_oil = function(){
	this.last_oil_change = this.miles;
	return this; //return the object
}
Vehicle.prototype.need_oil_change = function(){
	return ( this.miles - this.last_oil_change > 3000 );
}

var Car = function(make, model, door_count, hatch_back){
	this.make = make;
	this.model = model;
	this.door_count = door_count;
	if(arguments.length == 4){
		this.hatch_back = hatch_back;
	}else{
		this.hatch_back = true;
	}
	this.miles = 0;
	this.last_oil_change = 0;
}

Car.prototype = new Vehicle();
var kia = new Car('kia', 'soul', 4, true);

/* End objects */

var oilObj = document.querySelector('div.dash a:first-child');
var keyObj = document.querySelector('div.dash a:last-child');
var gasObj = document.querySelector('div.gas a');
var inputObj = document.querySelector('input');
var timerId, mileage = 0;

oilObj.addEventListener('click', function(evt){
	changeOil(evt, this);
});
keyObj.addEventListener('click', function(evt){
	startCar(evt, this);
});
gasObj.addEventListener('click', function(evt){
	driveCar(evt, this);
});

var startCar = function(e, x){
	e.preventDefault();

	x.classList.toggle('active');
	if(x.className === 'active'){
		checkOil();
	}
};

var checkOil = function(){
	if(kia.need_oil_change()){
		oilObj.classList.add('active');
	}else{
		oilObj.classList.remove('active');
	}
};

var changeOil = function(e, z){
	kia.last_oil_change = kia.miles;
	z.classList.remove('active');
};

var driveCar = function(e, y){
	e.preventDefault();

	if(keyObj.className === 'active'){
		if(y.className === 'active'){
			y.classList.remove('active');
			y.querySelector('i').className = 'mdi mdi-play';
			clearInterval(timerId);
		}else{
			y.classList.add('active');
			y.querySelector('i').className = 'mdi mdi-stop';
			timerId = window.setInterval(increaseMileage, 5);
		}
	}
};

var increaseMileage = function(){
	mileage += 1;
	kia.miles = mileage;
	inputObj.value = mileage;

	if(kia.need_oil_change()){
		oilObj.classList.add('active');
	}else{
		oilObj.classList.remove('active');
	}
};
