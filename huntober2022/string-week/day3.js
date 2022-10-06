function replaceKey(str) {
	const key = 'Space';
	for (const char of key) {
		str = str.replaceAll(char, ' ');
	}

	return str;
}

const string = "e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs";

console.log(replaceKey(string).split('').reverse().join(''));
