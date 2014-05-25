"use strict";

function getMissingElement(superImportantArray) {
  superImportantArray.sort();

  var firstItem, currentItem;

  for (var i = 0; i < superImportantArray.length; i++) {
    if ( i === 0 ){
        currentItem = superImportantArray[i];
    } else {
      currentItem = currentItem + 1;
      if ( currentItem !== superImportantArray[i] ){
        return superImportantArray[i] - 1;
      }
    }
  }

};


console.log( getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) ); // returns 8
console.log( getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) ); // returns 3
