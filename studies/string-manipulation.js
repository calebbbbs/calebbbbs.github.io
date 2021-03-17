/**
 * STRING MANIPULATION
 * [0]. Strings are the way we convey text or speech in javascript. Strings are one of the 
 * simple datatypes, so any change to it will assign it a new value. 
 * [1]. There are operators which can add or remove character(s) or word(s).
 * [2]. Also come with built-in String methods like .toUpperCase() and toLowerCase() to modify
 * strings as well.
 */
 
 // Strings Operators
 // You can use a couple different operators on strings. The main being the + to concatenate two
 // or more strings together. You can also use the +=, as well as -= to add to or remove from a string.

let a = "Hello, "; 

let b = "my friend!";

let myFriend = a + b;

console.log(myFriend);

//Console logs the two variables concatenated together printing, "Hello, my friend!". Now I will do it 
//with out having the spaces in the variables.

let c = "Hello";
let d = "friend!";
let friend = c + ", " + "my" + " " + d;
console.log(friend);

// This also logs "Hello, my friend!", but look how much more difficult that is compared with the first way. This is the better practice though,
// having unnecessary spaces in your strings is well unnecessary. To combat all that code, template literals were intorduced in ES6. They are similar to the first bit of code, 
//but with a touch different syntax.

let friend2 = `${c}, my ${d}`;
console.log(friend2);

// The first time I looked at these I was so confused, but now knowing what they mean, it makes it much more simple to add two string together. Notice the changes in the syntax
// with the backticks instead of quotes, and the ${} template literal syntax encompassing the variables.

let e = "Hi, ";

let f = "how are you?";

console.log(e.concat(f));

// Preceding the template literal was the .concat() method which combines the string in parentheses to the end of the variable performing the .concat() method.
// Order is very important, and make sure to have correct spacing and order correct to avoid potential mistakes.

function triangles(number) {
  for (let i = "#"; i.length <= number; i += "#") {
    console.log(i);
  }
}

triangles(8);

// This function will print a triangle of # 8 wide because each iteration of the loop added a new "#" to the string in i. 
//#
//##
//###
//####
//#####
//######
//#######
//########



// There are many different buikt-in String methods that will manipulate strings for us. 
let strr = "i want to be uppercase";

console.log(strr.toUpperCase());

// This will log the string in strr in all upper case. 'I WANT TO BE UPPERCASE' is printed to the console.


let str = "I WANT TO BE LOWERCASE";

console.log(str.toLowerCase());

// When this logs to the console every letter in str is lowercase. 'i want to be lowercase' is printed to the console.

// What if we wanted to capitalize just the first letter of each word in str?

let littlestr = str.toLowerCase();

function capitalizeAllWords(string) {
    let strings = string.split(" ");
    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substring(1);
    }
    return strings.join(" ");
}

console.log(capitalizeAllWords(littlestr));

// When you log the function capitalizeAllWords on littlestr, you have 'I Want To Be Lowercase' printed to the console.
// .split() method turns the string into an array, and then you can access the individual elements and perform the capitilaziation to the first
// letter of each word rather than just the first word of the array. Then using the .substring(1) method, I was able to concatenate the capitalized letter
// with a new array of strings beginning at the second index. 

// There is also a .replace and .replaceAll method for strings.

let stringy = "The good, the evil, and the ugly";

console.log(stringy.replace("evil", 'bad'));

// The .slice() method returns a portion of a string as a new string, without modifying the original string.

let strings = "I will be slicing this section of the sencence";

console.log(strings.slice(10, 17));

// When I run the console.log statement, slicing is printed to the console. The .slice() method will extract or slice starting at the index on the left, to the index on the right.
