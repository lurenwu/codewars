
function isPrime(num) {
    for (var i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2; 
}
module.exports = isPrime