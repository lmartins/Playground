var Animal;

Animal = (function() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.move = function(meters) {
    return this.name + (" moved " + meters + "m.");
  };

  Animal.prototype.sayName = function () {
    return "Hello there, im " + this.name;
  };

  return Animal;

})();

var sam = new Animal("Sammy the Python");
console.log(sam.move(5));
console.log(sam.sayName());
