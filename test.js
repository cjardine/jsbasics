function Person(name, height) {
	function reverse (string) {
		const array = string.split('');
		const reversedArray = array.reverse();
		const newString = reversedArray.join('');
		return newString;
	}

	return {
		name: name,
		height: height,
		backwardsName: this.reverse(name),
	};
}



var myString = `
this is
a
multiline
string
`;
const myBoolean = true;
const myNumber = 6;

const listItem = {
	name: 'Nathan',
	height: 165,
};

const myArray = [
	new Person('Nathan', 165),
	new Person('Chris', 175),
	new Person('Rob', 145)
];



myString.toUpperCase();
console.log(myArray); // 6
