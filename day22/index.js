var encryptThis = function(text) {
  if(text.length === 0) return '';
  return text.split(' ').map((word)=>{
    return word.split('').map((letter, index, arr)=>{
      if(index === 0) return letter.charCodeAt(0);
      if(index === 1 || index === arr.length - 1) return arr[arr.length - index];
      return letter;
    }).join('');
  }).join(' ');
}
module.exports = encryptThis
