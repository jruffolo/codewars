function parseDomainName(str) {
	if (str.includes('www')) {
		return str.split('.')[1];
	} else {
		return str.split('.')[0].split('//')[1];
	}
}

console.log(parseDomainName("http://github.com/carbonfive/raygun"));
console.log(parseDomainName("http://www.zombie-bites.com"));
console.log(parseDomainName("https://www.cnet.com"));
