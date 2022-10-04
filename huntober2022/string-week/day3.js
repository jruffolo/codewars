function replaceKey(str) {
	const key = 'A_KEY!';
	for (const char of key) {
		str = str.replaceAll(char, ' ');
	}

	return str;
}

const string = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters';

console.log(replaceKey(string));
