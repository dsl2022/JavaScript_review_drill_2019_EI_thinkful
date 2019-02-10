// Jedi name 
// jediName() function take two arguments
function jediName(firstName, lastName){
    // return first 3 leeters of last name and first 2 letters
    // of first name
    return lastName.slice(0,3)+firstName.slice(0,2);
}
console.log(jediName("John","Smith"));

// To infinity...

// beyond() function 
function beyond(num){
    // If infinite(+/-) log out 'And beyond'.
    if(num ===-Infinity || num ===Infinity){
        console.log("And beyond");
    }
    // If finite(+) log out 'To infinity'.
    else if(num < Infinity && num > 0) {
        console.log("To infinity");
    }
    // If finite(-) log out 'To negative infinity'.
    else if(num > -Infinity && num < 0){
        console.log("To negative infinity");
    }
    // If 0 log out 'Staying home'
    else if(num===0){
        console.log("Staying home");
    }
};

beyond(Infinity);
beyond(-Infinity);
beyond(10);
beyond(-10);
beyond(0);

// Cracking the code

//  All encoded has 5 letters
//  The first letter of each encoded word determines 
//  which of the remaining four characters contains the 
//  decoded character according according to the following key
//
// key => a:2 b:3 c:4 d:5
//
// e.g 'cycle' =>'l'.  'c' => "l" 


// If first letter isn't 'a', 'b', 'c', or 'd' 
// decoded to a space.

// decode handler
function decode(en_word){
	// key object
    let decodeKey = {
        a:2,
        b:3,
        c:4,
        d:5,
    }
	// if key is in object, return the decoded char 
	if(en_word[0] in decodeKey){
		return en_word[decodeKey[en_word[0]]-1];
	// else return a space	
	} else {
		return " ";
	}   
}

// main decoder function
function decoder(message){
	// split message into list of words
	let wordList = message.split(" ");
	// place holder for decoded 
	let decoded = [];
	// loop through the words and decode each one. 
	for (word of wordList){
		decoded.push(decode(word));
	}
	// return the result in str format(join them)
	return decoded.join("");
}
// test message 
let message = 'craft block argon meter bells brown croon droop'
decoder(message);

// console.log(decode('rycle'))
// console.log(decode('bells'))


