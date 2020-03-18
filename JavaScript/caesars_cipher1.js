function cipher_rot13(str) {
	const isCharacter = /\w/;
	return (str.split('').map(char => isCharacter.test(char) ? String
		.fromCharCode( (13 - (90 - char.charCodeAt())) > 0 
			? 64 +  (13 - (90 - char.charCodeAt())) 
			: 90 + (13 - (90 - char.charCodeAt()))) 
		: char)
		.join(''));
}

/* ADDED FLEXIBLE CIPHER */

function cipher(str, rotation=13) {
	const isCharacter = /\w/;
	return (str.split('').map(char => isCharacter.test(char) ? String
		.fromCharCode( (rotation - (90 - char.charCodeAt())) > 0 
			? 64 +  (rotation - (90 - char.charCodeAt())) 
			: 90 + (rotation - (90 - char.charCodeAt()))) 
		: char)
		.join(''));
}