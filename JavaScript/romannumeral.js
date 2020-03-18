function convertToRoman(num){
	if (num < 1 || num > 3999) {
		return 'Invalid roman numeral: ' + num.toString();
	} else {
		const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
		const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		let romanicValue = '';
		let placeholder = 0;
		while (num > 0) {
			let current_value = value[placeholder];
			if (num >= current_value){
				romanicValue += roman[placeholder];
				num -= current_value;
			} 
			else if (num < current_value) {
				placeholder++;
			}
		}
		return romanicValue;
	}

}