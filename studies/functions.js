/**
 * FUNCTIONS
 * [0]. Functions are essentially block of code that we can use to do what we want, wherever and whenever we need to do it.
 * [1]. Functions can be declared as a function declaration, or as a function expression. They take parameters, if needed, and accept all data types, even functions. 
 * [2]. Functions must be called or invoked once they are created to take effect. 
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

let v = 0;

function addToV(num){
    return v += num;
}

function add(num1, num2){
    let num  = num1 + num2;
    return addToV(num);
    
}
console.log(add(5, 5));

//Closure is when a variable is accessed by an inner function. In this function here, add() takes two numbers, and sets the sum to the let num. Add() returns the function addToV(), which accepts the 
//num variable and add the value of num to v. Resulting in v having a value of 10. This is a form of closure, because a function on the inside was able to reference a variable in its parents scope.

