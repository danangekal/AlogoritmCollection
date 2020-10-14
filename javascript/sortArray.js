const dataArray = `[
	{
		"firstname": "Arthas",
		"lastname": "Menethil",
		"birthdate": "1972-12-25",
		"location": "Icecrown"
	},
	{
		"firstname": "Brann",
		"lastname": "Bronzebeard",
		"birthdate": "1958-11-30",
		"location": "Ulduar"
	},
	{
		"firstname": "Cairne",
		"lastname": "Bloodhoof",
		"birthdate": "1932-03-15",
		"location": "Thunder Bluff"
	}
]`;

// const data = JSON.parse(dataArray);
// data.sort((a, b) => a.sort1 - b.sort1 || a.sort2 - b.sort2);

// console.log(data);

const sortArray = (keyname) => {
	
	return (a, b, c, d) => {
		// if (sortby == 'asc') {
		// 	sortStatus = 0;
		// } else if (sortby == 'desc') {
		// 	sortStatus = 
		// }
		var sortStatus = 0;
		
		var A = A[keyname].toLowerCase();
		var B = B[keyname].toLowerCase();
		var C = C[keyname].toLowerCase();
		var D = D[keyname].toLowerCase();

		if (A < B < C < D) {
			sortStatus = -1;
		} else if ( A > B > C > D) {
			sortStatus = 1;
		}

		return sortStatus;

	};
};


const sortAction = () => {
	data.sort(sortArray('lastname'))
};

console.log(JSON.stringify(sortAction));