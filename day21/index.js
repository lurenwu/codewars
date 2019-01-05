function bingo(a) {
  arr = ['B','I','N','G','O']
  return [...new Set(a.filter( (el) => arr.includes(String.fromCharCode(64 + parseInt(el)))))].length === 5 ? 'WIN' : 'LOSE';
}
module.exports = bingo