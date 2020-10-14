const countVowels = (str) => {
	return Array.from(str).filter(letter => 'aiueo'.includes(letter)).length;c
}

console.log(countVowels('tesaja')); // 3 