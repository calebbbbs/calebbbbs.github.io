/**
 * CONTROL FLOW
 * [0]. The flow of processing is read from top to bottom, in a straight line until the flow becomes altered by a control structure. This happens quite frequently.
 * [1]. Examples of control structures are functions, loops and conditional statements.
 * [2]. Allows you more than a single flow of processing, and to return to a previous place in the code with your current state. 
 * 
 * */
 
 
// 1. If..Else If...Else and Switch Statements
// Otherwise known as conditional statements, if..else if..else statements allow you to have multiple different flows of processing depending on the choice selected.
// Traditional if statements have a yes or no condition, but can be chained with an else if and else statement to provide multiple options. 
// Ternary Operators are also considered conditional statements, and are if statements stripped down for more concise code purposes. 
// Switch statements are similar to if statements, but it's for when you have many different options to choose from. They involve cases and break statements. 


 
            function ifElseIfElse(age) {
                if(age <= 12) {
                    console.log("You're a child");
                } else if ((age >= 13) && (age <= 19)) {
                    console.log("You're a teenager");
                } else if ((age > 20) && (age <= 29)) {
                    console.log("You're in your 20s");
                } else {
                    console.log("It's all downhill from here, buddy");
                }
            }

                ifElseIfElse(31); // Console will log 'It's all downhill from here, buddy'. 
                ifElseIfElse(7);  // Console will log 'You're a child'.
                ifElseIfElse(14); // Console will log 'You're a teenager'.
                ifElseIfElse(25); // Console will log 'You're in your 20s'.

            function ternary(age) {
                age >= 40 ? console.log("You're over the hill") : console.log("You still got it");
            }    
            
                ternary(41);  // Console wil log 'You're over the hill'.
                ternary(39);  // Console will log'You still got it'.
    
            function switching(color){
                switch (color) {
                    case "red":
                        console.log("I love red");
                        break;
                    case "blue":
                        console.log("blue is alright");
                        break;
                    case "orange":
                        console.log("A little too strong for me");
                        break;
                    case "green":
                        console.log("Money money money");
                        break;
                    default:
                        console.log("Nice choice");
                }
            }    
                
                switching("red");  // Console logs "I love red".
                switching("orange"); // Console logs "A little too strong for me".
                switching("purple"); // Console logs "Nice choice", because of the default statement. "Nice Choice" is logged whenever any color not a case is inputed.

// 2. Loops 
// Another way to change or direct the flow of processing is to impliment loops within our code.
// There are many different loops to choose from and type chosen will change upon the scenario.
// Loops allow you to iterate over data types like arrays and objects, giving you the ability to run your code multiple times. DRY "Do Not Repeat Yourself" when it comes to loops.

                function to100(){
                    for(let i = 0; i <= 100; i++){
                        console.log(i);
                    }
                }
                
                to100();  // 0-100 is printed to the console. If you had to console each individual number you would be hear forever. Now you can use the to100() whenever needed.
                          // DRY
                          
                let argh = ["yell", "scream", "holler"];
                
                function arghh(array){
                    for (let element of array){
                        console.log(element);
                    }
                }
                
                arghh(argh);  // yell scream holler was printed to the console, but not as a new array.  
                
                function itsBeenAWhile(){
                    let i = 0;
                    while(i <= 50){
                        console.log(i);
                        i++;
                    }
                }
                
                itsBeenAWhile();  // console logs 0-50. Must be careful with while loops, can create infinite loop and crash your computer. 
                
                let employee = {
                    name: "Bob Smith",
                    employeeNumber: 956895,
                    employmentStatus: "part-time"
                };
                
                function fullTime(object){  // This is the only way to loop through an object. It loops by the key, and allows you to access the property that way. 
                    for(let key in object){
                        if(object.hasOwnProperty("employmentStatus")){
                            return object.employmentStatus = "full-time";
                        }
                    }
                }

                fullTime(employee);  // Calling the fullTime() function on employee changes employmentStatus key to "full-time"

                console.log(employee.employmentStatus); // logs "full-time" because the value was changed when fullTime was called on employee.