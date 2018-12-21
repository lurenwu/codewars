function squares(x, n) {
  var y=[]
  var s=x;
  for(var i=0;i<n;i++) {
    y.push(s);
    s = s * s
  }
  return y
}
module.exports = squares