function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}
// console.log(duplicateCount("asdadaaa"))
module.exports = createPhoneNumber

