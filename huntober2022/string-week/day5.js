const punList = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood";
const validPuns = punChecker(punList);
console.log(`Number of valid puns: ${validPuns.length} \nValid puns: ${validPuns}`);

function punChecker(str) {
	const puns = str.split(',');
	let res = [];
	
	for (const pun of puns) {
		if (test(pun)) {
			res.push(pun);
		}
	}

	return res;
}

function test(str) {
	// run string through each test
	const tests = [noSpaces, noDogTrolling, notFive, oddCharCodes, notE, evenNumLowercase, twoCaps, noS];

	// console.log(`\n--- NOW TESTING: "${str}" ---\n`);
	for (const t of tests) {
		if (t(str) === false) {
			// console.log(`Fails ${t.name}`);
			return false;
		}
		// console.log(`Passes ${t.name}`);
	}

	return true;

	// test cases
	// no empty spaces at [0] or [end]
	function noSpaces(str) {
		return str[0] !== ' ' && str[str.length - 1] !== ' ';
	}

	// does not contain 'dog', 'bark', 'bone' in any case
	function noDogTrolling(str) {
		str = str.toLowerCase();
		return !str.includes('dog') && !str.includes('bark') && !str.includes('bone');
	}

	// total length is not a multiple of 5
	function notFive(str) {
		return str.length % 5 !== 0;
	}

	// charCode(0) + charCode(end) is odd
	function oddCharCodes(str) {
		return (str.charCodeAt(0) + str.charCodeAt(str.length - 1)) % 2 !== 0;
	}

	// character after middle is not 'e' (for even: [len / 2], for odd: [len+1 /2 ])
	function notE(str) {
		return str.length % 2 === 0 ? str[str.length / 2] !== 'e' : str[(str.length + 1) / 2] !== 'e';
	}

	// has an even number of lowercase letters
	// regex because I'm lazy
	function evenNumLowercase(str) {
		return str.match(/[a-z]/g).length % 2 === 0;
	}

	// has at least 2 capital letters
	// regex because I'm lazy
	function twoCaps(str) {
		return str.match(/[A-Z]/g).length > 1;
	}

	// does not contain a capital S
	function noS(str) {
		return !str.includes('S');
	}
}