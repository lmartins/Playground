'use strict';
function identify () {
  return this.name.toUpperCase();
}

function speak () {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log( greeting );
}
