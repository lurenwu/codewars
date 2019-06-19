function validPhoneNumber(phoneNumber){
  return /\(\d+\) \d+\-?\d+/.test(phoneNumber)
  
}
// console.log(validPhoneNumber("(098) 123 4567"))
module.exports = validPhoneNumber
