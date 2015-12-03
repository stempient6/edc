function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
};
var person1 = new Person('Daniel', 5, 'Daddys Buddy');
var person2 = new Person('Marian', 69, 'Grandma');
var person3 = new Person('Johnnie', 80, 'Marine');
var person4 = new Person('Rose', 46, 'Teacher');
var person5 = new Person('Stevie', 18, 'Student');
//console.log(person1);

var persons = function(){
	for(var i = 0; i < arguments.length; i++){
	 	 console.log(arguments[i]);
	}
}(person1, person2, person3, person4, person5);

