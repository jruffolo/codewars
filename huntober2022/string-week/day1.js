function decipherLeetSpeak(str) {
	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const cipher = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];
	let res = '';

	for (const char of str) {
		if (nums.includes(char)) {
			res += cipher[+char];
		} else if (cipher.includes(char)) {
			res += nums[cipher.indexOf(char)];
		} else {
			res += char;
		}
	}

	return res;
}
