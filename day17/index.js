
function alphabetPosition(text) {
  return text.match(/[a-zA-Z]/g) ?text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ') : '';
}
module.exports = alphabetPosition