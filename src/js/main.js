"use strict";

var _   = require('lodash'),
moduleA = require('./moduleA');

var country, weather, food, currency, cars, message;
country = "England";

var personObj = {
  name: "Luis",
  age: 35
}

console.log(_.forIn(personObj));

if (country === 'England') {
  weather = 'horrible';
  food = 'filling';
  currency = 'pound sterling';
}

if (country === 'France') {
  weather = 'nice';
  food = 'stunning, but hardly ever vegeterian';
  currency = 'funny, small and colourful';
}

if (country === 'Germany') {
  weather = 'average';
  food = 'wurst thing ever';
  currency = 'funny, small and colourful';
}

message = 'this is ' + country + ', where the weather is ' + weather + ', the food is ' + food + ' and the currency is ' + currency;

// console.log(message);

cars = [
  'Audi',
  'BMW',
  'Mercedes',
  'Opel',
  'Seat'
];

_.each(cars, function(brand){
  console.log("Make: " + brand);
});

// for (var i = 0; i < cars.length; i++) {
//   var brand = cars[i];
//   console.log(brand);
// }
// var keys = [];
// for (var k in cars){
//   keys.unshift(k);
// }
// for (var i = 0; i < keys.length; i++) {
//   console.log(cars[keys[i]]);
// }
// function showName() {
//   var name = "John Doe";
//   console.log(name);
// }
var showName = function() {
  var name = "John Doe";
  console.log(name);
};
// showName();


// TODO: ver erro 404
// require.ensure(["./moduleB"], function(require) {
//     var b = require("./moduleB");
// });

var teste = _.map([1,2,3], function(value){
  return value % 3 === 0
})
console.log(teste);
