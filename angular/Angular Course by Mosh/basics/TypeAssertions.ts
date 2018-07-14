let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');  // tells ts compiler to assert that message is a string
	let alternativeWay = (message as string).endsWith('c');  // alternative way 
