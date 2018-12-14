function nbYear(p0, percent, aug, p) {
  var i = 1;
  a(p0, percent, aug, p)
  function a (p0, percent, aug, p) {
    p0 =  p0 + percent * p0 * 0.01 + aug ;
    if(p0 >=p){
      return i
    }
    a(p0, percent, aug, p)
    i++
  }
  return i
}

// function nbYear(p0, percent, aug, p) {
//   var year = 0;
//   while (p0 < p) {
//     p0 += (p0 * (percent/100)) + aug;
//     year++;
//   }
//   return year;
// }
module.exports = nbYear
// console.log(nbYear(1500, 5, 100, 5000))