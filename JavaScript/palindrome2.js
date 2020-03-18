function palindrome(str){
  let filtered = str.toLowerCase().split('').filter(letter => letter.match(/[a-z0-9]/));
  for (let i = 0; i < filtered.length / 2; i++) {
  	if (filtered[i] !== filtered[filtered.length - (i + 1)]) {
  		return false;
  	}
  }
  return true;
}