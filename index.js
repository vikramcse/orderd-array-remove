'use strict';

function removeElement(array, index) {
  var location = array.indexOf(index);

  if (location !== -1) {
    array.splice(location, 1);
    return array;
  }

  return [];
}

module.exports = removeElement;
