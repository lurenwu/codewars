function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match,dash,letter){
    console.log(match,dash,letter)
    return match.charAt(1).toUpperCase();
  });
}
console.log(toCamelCase("the_stealth_warrior"))
// module.exports = toCamelCase
