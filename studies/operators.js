/**
 * OPERATORS
 * [0]. Operators give us the ability to compare and assign data that out program receives, allowing us to act upon said data. There are many types of operators including: arithmetic, assignment, comparison, 
 * conditioinal (ternary), logical, string, and unary.  
 * [1]. Operators take at least one operand (the value being subjected to operation), and use the operator attatched to it to act upon the operand(s) and return a value. 
 * [2]. Sometimes operators are based on boolean logic, and sometimes off of logic like math if you are using arithmetic operators.
**/

// 1. Assignment Operators (=. +=. -=. *=. /=, etc. )
//      The assignment operator is probably the most widely used operator and is very simple with it being just the (=) symbol. It is used to assign values to variables, consts, and lets, and also to increment 
//      your variable. The assignment operator takes the operand on the left and assigns it the value of the oeprand on the right. You can do the same with arithmetic values if used with = operator. Will 
//      perform the (+=) addition, (-+) subtraction, (/=) division, or (*=) multiplication, and assign the value to the left operand. 

            let thisVariable = 'variable'; // thisVariable was assigned the value of 'variable' with the assignment operator.
            
            let number = 45; // Number is assigned the value of 45;
            console.log(number += 1); // += means, number = operand + operand, which changes the value to be 46. You can use these to cut down on the amount of code you write. 
            
            console.log(number *= 2); // *= means to multiply the variable operand by the operand provided. the value of number has been changed to be 92. 
            
            console.log(number /= 4); // /= means to divide the variable operand by the operand provided, the value of number has been changed to 23. 
            
            console.log(number -= 11); // -= means to subtract the variable operand by the operand provided, thus resulting in the value being changed to 12. 
            
// 2. Arithmetic Operators (+, -, *, /, ==, ===)
//      Arithmetic operators take two operands, and uses the arithmetic logic applied to resolbe the expressions. They are binary operators because they work with two operands. 

            console.log(4 + 5); // will print 9 to the console. Prints 9 due to addition operator adding 4 to 5. 
            
            console.log(4 % 2); // will print 0 to the console, because 4 is divisible by 2. 
            
            console.log(24 / 6); // will print 4 to the console, because 46 divided by 6 is 4.
            
            let num = 15; // num is assigned the value of 15 with = operator.
            
            console.log(num * 2); // num is multiplied by 2 resolving to 30 being printed to the console.
            
            console.log(num); // 15 is printed to the console because we did not change the value of num, just multiplied it by 2, in the previous console.log statement. 
            
// 3. Comparison Operators (<. >, <=. >=, ==, ===, !=, !==)
//      Comparison operatorys take two operands, and compare the value of the left operand to the value of the right operand, thus resulting in a boolean value being returned. 
//      Syntax is typically operand operator operand.
            
            console.log(5 < 4); // checks to see if the operand on the left is less than the operand on the right, console will log false baecause 5 is not less than 4.
            
            console.log(3 <= 3); // checks to see if the operannd on the left is less than or equal to the operan on the right, console logs true because 3 is equal to 3. 
            
            console.log(4 > 9); // checks to see if the operand on the left is greater than the operand on the right, resulting in the console logging false because 4 is not greater than 9.
            
            console.log(25 >= 23); // checks to see if the operand on the left is greater than or equal to the operand on the right, console logs true because 25 is greater thn or equal to 23. 
            
            console.log('3' == 3); //console will log true because == is NOT strict and should be avoided unless purposefully using it. Only checks value, not type. 
            
            console.log('6' === 6); //console will log false because === is strict. Checks for both type and value to be equal. Preferred method of equality check. 
            
// 4. Logical Operators (&& , ||, !)
//      Logical operators take 2 operands, and compare whether conditions come out to true or false. Often combined with comparison operators, or another form of operator to check to see if an entire situaiton
//      comes out to be true or false, rather than an individual outcome. Bang operator "!" reverses the truthiness of a value, it is also in the unary category. It only needs at least one operand , differing from the other two.  
//      !! Double Bang operator will resolve a value to a boolean. It will resolve to false if the value is falsy: 0, null, undefined, etc.; otherwise the value will resolve to true.       
        
            function andOperator() {        
                if ((5 > 4) && (8 > 9)){        // && AND operator will print "It's true" if both resolve to true. Will print "It's false" if both resolve to false, or if one is true and one is false. 
                    console.log("It's true");
                } else {
                    console.log("It's false");  // 'It's false' is logged to the console, because only operand resolved to true.
                }
            }
            
            function andOperator2() { 
                if ((5 < 9) && (8 > 5)){        // && AND operator checking to see if operands on both sides are resolving to true.
                    console.log("It's true"); 
                } else {
                    console.log("It's false");  //"It's true" is logged to console because both sides resolved to being true. 
                }
            }
            
            function orOperator() {
                if ((5 <= 3) || (8 >= 7)) {     // || OR operator checks to see if at least one operand is true and will print true if at least one operand resolves to true.
                    console.log("It's true");
                } else {
                    console.log("It's false");  // "It's true" is logged to the console because, while the left operand is false, the right operand resolves to true...meeting the conditions for the || operator to be true.
                }
            }
            
            function orOperator2() {            
                if ((7 > 9) || ("b" < "a")){    // || OR operator checks to see if at least one operand resolves to true, and will print "It's true" or "It's false" depending on conditions met when operands resolve.  
                    console.log("It's true");
                } else {
                    console.log("It's false");  // "It's false" is logged to the console because both operands resolved to false. 
                }
            }
            
            console.log(!true);                 // false is printed to the console because the truthiness of the operand was flipped, resolving to be false. 
            console.log(!false);                // true is printed to the console, because the truthiness of the operand was flipped, resolving to be true. 
            
            let not = !true;                    // not is declared as a let varaible, and assigned the value of !true.
            
            function notTrue(){                 // When notTrue is called it will log not to the console.
                console.log(not);
            }                                   // false is logged to the console because our operand (not) is assigned the value of !true.
            
            console.log(!!1);                   // !! Double Bang Operator will make the operand return a boolean, and true will be printed to the console because -1 is a truthy value.
            
            let value = null                    // value is declared as a let variable, and is initialized with null as its value.
            console.log(!!value);               // !! Double Bang operator will make the operand return the truthiness of its value. Null is considered falsy, so false is printed to the console.
            

// 5. String Operators 
// String operators can use arithmetic operators and assignment operators that increment the value, as well as using the + sign to concatenate the two strings together and form one new string of the two strings being combined. 
// 

            let string = "I am a String.";       // let variable string is assigned the value "I am a String." 
            
            let string2 = "I am also a String."; // let variable string2 is assigned the value of "I am also a String."
            
            console.log(string + string2);      // I am a String.I am also a String. is printed to the console. We got the strings to add together but we don't have out space after the first period. 
            console.log(string + " " + string2);// This time, 'I am a String. I am also a String.' is printed with the correct spacing using the arithmetic operator to add the two together including a space. 
        
            function triangle(num) {            // This function will print a triangle of "x"s depending on the size of num paramter. 
                for (let i = "x"; i.length < num; i += "x"){
                    console.log(i);             // As the for loop iterates through the num parameter, an "x" is being added to the total of i with the += operator. It adds and assigns the new value to the variable, let, etc. 
                }
            }
            
            triangle(8);                        // the triangle of 'x's below me is logged to the console because of the += operator. 
                                                //x
                                                //xx
                                                //xxx
                                                //xxxx
                                                //xxxxx
                                                //xxxxxx
                                                //xxxxxxx
                                                
    // 6. Unary and Conditional (ternary) Operators
    // I lumped these two together because they are both used a little bit differently than the rest of the operators. Unary operators are keywords, not symbols like the rest of the operators. A little bit different. Then the ternary
    // operator is a new operator that was added to help make if statements more concise. They use a ? and : for the return/else statement.  Unary take one operand and ternary can take at least one operand. 
    
            let obj = {                         // obj is an object with a little information about me
                name:   "Caleb",
                school: "Op Spark",
                age:    31,
                fun:    ['photography', 'music', 'editing photos', 'coding']
            }
    
            delete obj.school;                  // delete keyword will check to see if object has a school key value pair, and will delete it if it does have one. The school key and value pair is removed from obj, making this true. 
            delete obj.class;                   // delete keyword checks to see if there is a class key value pair, and when it doesn't find one it does not delete anything. Technically this would be false. 
            
            console.log(obj);                   //{
                                                    // name: 'Caleb',
                                                    // age: 31,
                                                    // fun: [ 'photography', 'music', 'editing photos', 'coding' ]
                                                //}
                                                
                                                //notice how the school key and value pair are missing after the delete code was read. 
                                                
            let keyboard = "Electric";
            
            typeof keyboard === "string" ? console.log(true) : console.log(false);        // This is a ternary operator, using a unary operator and a strict comparison operator. 
            
                                                // With the ternary operator the if, else, and return keywords are all removed. insted of if(typeof....) you simply put typeof keyboard === "string" ? true : false;.
                                                // The ? replaces the if statement, and the : replaces the two separate return statements and the else statement. Four lines turned into one. 
                                                // typeof is also a unary operator as I mentioned earlier. In this scenario it is checking if the data type of the operand was a string. If it was it would print true, or false if not. 
                                                // True is printed to the console because the data type of keyboard is indeed a 'String'. 
            let airplane = 747;
            
            typeof airplane === "string" ? console.log(true) : console.log(false);
                            
                                                // airplane is assigned a value of 747 and our ternary statement is checking for the operands type to be a "string". Since our operand has a value of 747, false is printed to the console.