function palindrome(str){
  let filtered = str.toLowerCase().split('').filter(letter => letter.match(/[a-z0-9]/))
  let reversed = filtered.slice(0).reverse().join('');
	return filtered.join('') === reversed;
}