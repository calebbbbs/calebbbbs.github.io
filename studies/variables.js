/** 
 * VARIABLES
 *  [0]. Variables are valuable containers designed to hold a value of the programmers discretion. I like to think of them like buckets. You can use the same bucket to carry sand, dirt, water, etc. Similar logic 
 *  applies to variables. Once a variable is declared, it can be reused, and/or reassigned to fit the need of the programmer. Capable of holding the value of all data types , as well as 
 *  functions, variables are useful tools that can help to make code easier to read, as well as more concise. 
 *  [1]. To create a variable the keyword var needs to be written, followed by a name that will be the called upon to access the information that the variable you just created will contain.  
 *  [2]. Once created or declared, assign a value to the variable. 
 */
 
// 1. Declaration of Variable
//  Once keyword var is given a name, the variable will be declared. Although declared, it will be undefined because it has not been initialized, or assigned a value.
    
        var variable1; // Declared, but not assigned a value
    
        console.log(variable1); // will print undefined to the console.
    
// 2. Initialization Of Variable
//  variable1 has been declared, it still needs a value?
//  Use the assignment operator (=) to assign the variable some type of simple datatype, complex datatype, or function. 

        variable1 = 55; // variable1 is now assigned the value of the number 55. 
    
        console.log(variable1); // Will print 55 to the console because variable1's value was assigned to be 55. 
    
// 3. Hoisting Of A Variable
//  Variables and functions are hoisted to the top of the page but in a different fashion.
//  The name and value of a function are hoisted, contrasted to the variable being hoisted by name alone.

        console.log(variable1); // Will print 55 because variable1 has been assigned value before console statement.
        console.log(variable2); // Will print undefined becasuse hoisting of a variable is done by name alone, and does not include the value like with a function.
    
        var variable2 =  22; // Assign a value of 22 to variable2!
    
        console.log(variable2); // Will print 22 to the console because variable was initialized before the console.log statement. 
    
// 4. Reassignment/Redeclaration Of A Variable
// variable 1 has been assigned a value of 55, but what if we need variable1 to equal something different? Luckily for us, variables are able to be reassigned.
// Reassignment is when you type in a variables name without var, and change its value to something different than what it currently is set to. 

        variable1 = 66; // variable1 is now reassigned the value of 66. 
        
        console.log(variable1); // Will print 66 to the console since variable1 was reassigned with 66 as its current value.
        
        var variable1 = 88; // variable1 has been redeclared and initialized with the value 88. 
        
        console.log(variable1);
        
// 5. Let
// Variables are great, but come with some pitfalls, i.e. having global scope. Sometimes that can get weird. In ES6, the creators put together two new variable types: const and let. 
// Let and var are very similar, they both can be reassigned a different value. But let is block scoped, meaning if it is called within code block, the let variable will not be able to escape the code block and
// be accessed in the global scope like with var. It is almost common place at this point to discontinue using var in replace of let. 
// If declared in the global scope the let variable will behave similarly to a var variable. Major difference comes with hoisting. var is hoisted to top with functions, let is not. 
        
        //console.log(using); // Will result in a referenceError because using is not hoisted. 
        
        let using; // using is declared with the let keyword and using. The let keyword provided stricter rules giving a programmer more control over the control flow.
        
        console.log(using); // will print to theo console, undefined.
        
        using = 8; // using is assigned the value of 8, being initialized fully.  
        
        console.log(using); // will print to the console, undefined. 
        
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < array.length; i++){
                let num = array[i];
                console.log(i);
        }
        
        console.log(num); // ReferenceError: num is not defined because let is block scoped. 
        
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < arr.length; i++){
                var num = arr[i];
                //console.log(i);
        }
        
        console.log(num); // will log 10 to the console because that is the value that array[i] will be at the end of the loop. Var can be accessed from outside block scope giving let an advantage because of this. 
// 6. Const
// Along with let, the creators of JavaScript also put together const. Const is a constant which means its value will not be changed once assigned. There are some who say you should capitalize a const variable
// to let people know it is const. It is also block scoped and not hoisted along with let. One big difference between const and the other two, is const has to be initialized when declared. You cannot leave
// a const variable empty. 

        //console.log(big); // Will throw, referenceError big is not defined, because big is not hoisted.

        //const big; // Will throw error, referenceError big is not defined, because it is not initialized upon creation.
        
        const big = 25; // Const is set to 25 permanently. 
        
        //const big = 30; // TypeError: Assignment to constant variable. Also, big cannot be redeclared, resulting in another error besides the first one. 
        
        console.log(big); // Will log 25 once errors are taken care of due to calculated misuse of const declared variable. 
        
        const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < array2.length; i++){
                const num = array2[i];
                console.log(i);
        }
        
        //console.log(num); // Will log a referenceError because const cannot be accessed outside of the block they are scoped in. 
        
        