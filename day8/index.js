"use strict";

function flattenAndSort(array) {
  // return [].concat(...array).sort((a,b) => a - b);
  return array.reduce((a,b)=> a.concat(b), []).sort((a,b)=>a-b);
}

module.exports = flattenAndSort