const string = "e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs";

const parsed = removeEeks(scrapCatScratch(string)).split('').reverse().join('');

function scrapCatScratch(str) {
	return str.slice(str.indexOf('c') + 1);
}

function removeEeks(str) {
	return str.replaceAll('Eek!', '');
}

function splitDecode(str) {
	const strArr = str.split('v');
	let res = '';
	for (const substr of strArr.slice(1)) {
		res += substr[0];
	}
	
	return res;
}

console.log(splitDecode(string));
