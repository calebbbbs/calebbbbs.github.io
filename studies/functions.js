/**
 * FUNCTIONS
 * [0]. Functions are essentially block of code that we can use to do what we want, wherever and whenever we need to do it.
 * [1]. Functions can be declared as a function declaration, or as a function expression. They take parameters, if needed, and accept all data types, even functions. 
 * [2]. Functions must be called or invoked once they are created to take effect.
 * [3]. Functions have a local scope, which cannot be accessed by the global scope.  
 */
 
 // The keyword function is used to define and declare a function, followed by parentheses, and a block of code within curly braces.
 // This is known as a function declaration.
 
    function hi() {
        console.log("hi");
    }
    
    hi();
    
// After the function hi() was called did the action it was deemed to perform take effect, having "hi" being logged to the console.

// You can also have a function being created as a function expression. Function expressions are anonymous functions created inside of variables.

let funk = function(){
    console.log("funk");
};

funk();

// Since this function was created inside of the variable it needs to be called as well, so simply putting the () after the variable calls the function for us, logging "funk".

// Parameters are placeholders for data that will be used as arguments later when the function is called.

function subtract(num1, num2){
    return num1 - num2;
}

console.log(subtract(12, 6));

// In this scenario the parameters that num1 and num2 stood for were two numbers. Num2 is to be subtracted from num1. You name the parameter something to help you recognize what your arguments will be.
// Arguments are the inputed data that go into the function call. 12 and 6 were the arguments when we logged subtract() to the console.

// This is the first time I used a return statement, return statements tell a function what to output. No matter how long a code block is, once it returns the function is completed. 

// Any variable, let, or const declared inside of a function is local scoped, and thus not able to be seen by the parent or global scope.

function add(num){
    let i = 7;
    return num + 1;
}

//console.log(i);

// If you try to log i to the console, you will get an error saying that i is not defined. Although it is technically declared, it is bound to the scope of the add() code block, referred to as local scope.

let i = 0

function addToI(num){
    return i += num;
}

addToI(10);

console.log(i);
// Here is the opposite taking place, any child scope can see into the parent scope. Since i was declared in the global scope, the inner scope of addToI() is allowed access to i and any
// other global object. 

// Closure is when an inner function accesses a parent or outer functions scope. This can only be done by the inner function because of scope limitations. A closrue is a combination of the function and any local
// variables that were within in-scope at the time it was created. This can be the scope of the outer function and any other outer scope it is nested in. In can see out, but out cannot see in.  



let v = 10;

function add2V(num1, num2){
    let num  = num1 + num2;
    function addToV(){
        return v += num;
    }
    return addToV();    
}
console.log(add2V(5, 5)); // Logs 20 to the console, because v = 10, and num1 and num2 were both 5. 10 + (5 + 5) = 20.



// Depending on what v equals, add2V() will produce a different outcome. addToV() references the global variable v, and adds it to num. Num is set to be 
// num1 + num2. Since the inner function, addToV(), accesses the num variable inside of add2V()'s scope, and proceeds to add it to v when called, this forms a closure. It also references the global variable 
// v, showing that global scope declred variables can be accessed from anywhere. If v were declared inside of addToV() scope, then v would only be able to be accessed from within addToV(). This gives this 
// function alot of versability, because it can be used to produce a different outcome without changing the inside of the functions. Nothing is hard coded, and the data is accessed by closures. 

// Functions have a localized scope. Declared functions or variables created inside of the function will not be able to escape the localized scope, unless by another function created within that function.
// I like to think of it like double sided glass. The function on the inside can see inside of the function on the outside, but the outside cannot see what is inside of the inner scope. 

let a = 1;

function scope(){
    let b = 4;
    return a; 
}

console.log(scope()); // This will log a, which is 1. The variable a, having global scope, is able to be accessed from anywhere in the code where a is located. That is the difference between global and local
//scope. Global scope can be accesed from anywehere, local scope can only be accessed by the function and any other nested functions inside of that function. 

//console.log(b); // This will throw an error because b is not defined in the global scope, only inside of the function. It is bound to the localized scope within the function. 


// This function provides a good idea of how closure works. Closure is when an inner function accesses an outer functions scope. The function wordBackwards takes in a string, and returns that string in reverse.
// I created it with the intentions of having a nested function, so word was created to hold string as an array. I then created the function reverseIt() and it takes no parameters, but does reference the array
// in the word variable. It is able to access the scope of the parent function, wordBackwards(), thus creating what we know as a closure. If there were a variable created within reverseIt(), I would not be able to 
// access that variable outside of the scope of reverseIt(). 


function wordBackwards(string){
  let word = string.split("");
  function reverseIt(){
    return word.reverse().join("");
  }
  return reverseIt();
}


console.log(wordBackwards("Caleb")); // Logs "belaC" to the console. 

