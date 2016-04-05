// create array from input value with class 'selector'
var createInputArray = function (selector) {
	var names = $("input[class=" + selector + "]").map(function () {
		return $(this).val();
	}).get();

	return names;
}


// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// lets us use our object on the click of the login button
$('#login').click(function() {

	// create a new 'Greetr' object (let's pretend we know the name from the login)
	// var loginGrtr = G$('John', 'Doe');

	// calling G$ with array 'names' as parameters via .apply()
	var loginGrtr = G$.apply(this, createInputArray('names'));

	// hide the login on the screen
	$('#logindiv').hide();

	// fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});



























// Lection 70

// var q = $("ul.people li");
// console.log(q);




// "use strict";

// var person;

// persom = {};
// console.log(persom);






// var people = [
// 	{
// 		// the 'john' object
// 		firstname: 'John',
// 		lastname: 'Doe',
// 		adresses: [
// 			'111 Main St.',
// 			'222 Third St.'
// 		]
// 	},
// 	{
// 		// the 'jane' object
// 		firstname: 'Jane',
// 		lastname: 'Doe',
// 		adresses: [
// 			'333 Main St.',
// 			'444 Fifth St.'
// 		],
// 		greet: function() {
// 			return 'Hello!';
// 		}
// 	}
// ]





// String.prototype.isLengthGreaterThan = function(limit) {
// 	return this.length > limit;
// }

// console.log("John".isLengthGreaterThan(3));

// Number.prototype.isPositive = function() {
// 	return this > 0;
// }




// function Person(firstname, lastname) {

// 	console.log(this);
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	console.log('This function is invoked.');

// }

// Person.prototype.getFullName = function() {
// 	return this.firstname + ' ' + this.lastname;
// }

// var john = new Person('John', 'Doe');
// console.log(john);

// var jane = new Person('Jane', 'Doe');
// console.log(jane);

// Person.prototype.getFormalFullName = function() {
// 	return this.lastname + ', ' + this.firstname;
// }

// console.log(john.getFormalFullName());















// var person = {
// 	firstname: 'Default',
// 	lastname: 'Default',
// 	getFullName: function() {
// 		return this.firstname + ' ' + this.lastname;
// 	}
// }

// var john = {
// 	firstname: 'John',
// 	lastname: 'Doe'
// }


// // don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;

// for (var prop in john) {
// 	if (john.hasOwnProperty(prop)) {
// 		console.log(prop + ': ' + john[prop]);
// 	}

// }

// var jane = {
// 	address: '111 Main St.',
// 	getFormalFullName: function() {
// 		return this.lastname + ', ' + this. firstname;
// 	}
// }

// var jim = {
// 	getFirstName: function() {
// 		return firstname;
// 	}
// }

// _.extend(john, jane, jim);

// console.log(john);























/*function mapForEach(arr, fn) {

	var newArr = [];
	for (var i=0; i < arr.length; i++) {
		newArr.push(
				fn(arr[i])
			)
	};

	return newArr;
}



var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});

console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
});

console.log(arr3);




var checkPastLimit = function(limiter, item) {
	return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4);


var setLimiter = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};
var arr5 = mapForEach(arr1, setLimiter(1));

console.log(arr5);




// underscore
var arr6 = _.map(arr1, function(item) { return item * 3});
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);


*/





















