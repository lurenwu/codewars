function solution(str){
  return (str.length%2 === 0?str: str + "_" ).match(/.{2}/g)
}
console.log(solution("abcdef"))
// module.exports = cmp
