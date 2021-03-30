/**
 * DATATYPES
 * [0]. Data is divided into type, which the computer uses to provide a detailed description of the information rather than an aimless display of random data points.
 * [1]. Data type is defined by either being primitve and simple, or complex.
 * [2]. A major difference between the two is simple copy by value, and copy by reference. 
 **/
 
 // 1. Simple Datatypes
 // Simple datatypes are strings, booleans, numbers, null, undefined, nan, and Infinity. 
 // Simple Datatypes copy by value, and hold a copy with it of the value assigned to. That means the value will not change when referenced, it has to be reassigned to change.
 // They are immutable, and atomic. The values they hold can only be changed, not mutated. 5 will only equal 5. Any change to it represents a new value. 
 
          let too = 'too'; // String Datatype - Hold what we would consider to be words and text. Capable of holding letters, numbers, and special characters, strings give us the ability to pass along sentences. 
 
          let seventy = 70; // Number DataType - Hold numeric data inputs, and only numeric data. If you try to assign a value that is not a number, you will get NaN, or not a number. 
 
          let bool = true; // Boolean DataType - Boolean is a form of logic based off of a values truthiness. Will return either true or false. 
 
          let boo = false; // Boolean Datatype - See above ^^^
 
          let notANumber = NaN; // NaN is a number data type, somewhat like an error for when a character that isn't a number is interpreted when the expected input was to be a number. 
 
          let andBeyond = Infinity; // Infinity is also a number data type, it holds a value higher than any other number. Infinity is technically a global variable. 
 
          let noValue = null; // null or the absence of value, awaiting a value to be applied to the variable. It will have a typeof equaling to object.
 
          let notDefined = undefined; // Undefined also represents the absence of value. 
 
// 2. Complex DataTypes
// Complex datatypes are Arrays, Objects, and functions. 
// Complex datatypes are mutable, and indefinite. Objects and arrays can be mutated without affecting the actual object or array itself. Simple datatypes are held inside of complex datatypes. 
// 

          let array1 = [too, seventy, bool, boo, notANumber, andBeyond, noValue, notDefined]; // this is an array. Notice that it can hold any type of simple number. They can also hold objects and functions. 

          let obj1 = {         // This is an object. They are used to hold a collection of data pertaining to one thing. 
           name: "Caleb",      // This is a key value pair, with the string value "Caleb" being held within the key of name. 
           school: "Op Spark", 
           age: 31,           
           randomArray: [too, seventy, bool, boo, notANumber, andBeyond, noValue, notDefined]
          };

          function firstFunction() {        // This is a function, named firstFunction
            let ff = "This is a function";
            console.log(ff);
          }                                 // "This is a function" is logged to the console becaue the string vaule of "This is a function" is assigned to ff. The function holds and resolves to the primitive string data type. 
 
// 3. Copy by Value
// Simple data types copy by value. If you reference a variable, the value it holds is only a copy of the value assigned to the value and cannot be changed. For example:

          let a = 3; 

          let b = a; // b is assigned the value of a.

          b += 3;  

          console.log(b); //prints 6 to the console, because the copy of the value from a has three added to it.
 
          console.log(a); // prints 3 to the console, because the value of a was not affected, only the copy of the value b represented was changed.
 
          a + 3;  
 
          console.log(a); // prints 6 because the value itself was changed, but not from a reference through being assigned to b.  

         let c = "hello"; 
         
         let d = c; //d is assigned the value of c
         
         d = "hello world"; // d is changed to "hello world"
         
         console.log(d); // prints "hello world"
         
         console.log(c); // prints "hello", because it was a copy of the variable c being changed, not the variable c.
         
// 4. Copy by Reference
// Complelx data types copy by reference. If you make changes to a variable referencing a complex data type, the referenced value is changed. 
          let obj2 = obj1;     // Obj2 is assigned the value of obj1.
 
          obj2.name = "Gavin"; // The key value of name of the object referenced in obj1 is changed from 'Caleb' to 'Gavin'.   
 
          console.log(obj1);   // { name: 'Gavin', school: 'Op Spark', age: 31 } is logged to the console, having the name key value changed to 'Gavin'. 

                               // This happens because the change of the key of obj2 changes the complex datatype it references because it refers to the actual object or array, rather than to a copy with simple datatypes. 
                               // This is why they say complex data types copy by reference, and simple data types copy by value. Although the value within the complex datatype changes, it is still referencing to the same array, object, or function. . 
   
          console.log(obj1.randomArray); // Will print ['too', 70, true, false, NaN, Infinity, null, undefined] to the console.
          
          console.log(obj1.randomArray.pop()); // Will print notDefined to the console, which is undefined because the value of notDefined poionts to undefined. It also removes notDefined from the array within the randomArray key.
          
          console.log(obj1.randomArray); // Will print [ 'too', 70, true, false, NaN, Infinity, null ] to the console, with the undefined value at the end of the array not being logged. 
 
                               // Referencing and making changes to a complex data type will cause permanent changes to the one being referenced. 
    
// 5. Accessing objects and arrays
// Complex data types can hold multiple pieces of data at one time, you need to be able to access the data stored within them. We have bracket notation and .dot notation to help us with that.

          let newObj = {
              name: "Botty White",
              id: 4568234,
              duty: "fix the code"
          };
          
          console.log(newObj.name); // will print 'Botty White' to the console because the key of name was accessed by using newObj.name.
          
          newObj.deployed = false; // This will either create a new key for deployed and set it to false, or it will set the existing key to be false. Since we do not have that key yet, it will create and set to false.
          
          console.log(newObj); // This will show our newObj with the new deployed key set to false. When Botty is sent to fix the code her deployed key will be set to true.
          
          console.log(newObj["name"]); // Will print 'Botty White' to the console as well because bracket notation allows us to access the key of name as well. Very important to use quotes because in bracket notaion
                                       // the system will be looking for a key with the actual key named "name". 
          
          newObj["name"] = "Botty Sparks"; // Botty got married and changed her last name. To change the name you can use bracket notation and reassign the key of name.
                                        
          console.log(newObj); // Now when you log newObj to the console you see "Botty Sparks" logged to the console instead of "Botty White".
          
          let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
          // Arrays can only be accessed with bracket notation, they can not be accessed with dot notation like objects can. 
          
          console.log(arr[0]); // This will log 1 because the first index is accessed with 0. Indexed lists begin at 0 not 1. 
          
          console.log(arr[arr.length - 1]); // This will log 0 to the console. The length of an array begins at 1, but the index begins at 0, so when searching for the end of the array, one must subtract one 
                                            // from the length. -2 from the length and you will get the second to last element, and so on. 
                                            
          arr[arr.length - 1] = 10; // Since bracket notation allows us to access the index number, and the data can be mutated since it is complex, we are able to reassign the value of any index to a different value.
          
          arr[arr.length] = 11; // So this will add an element of 11 at the end of the array. Notice that if you go to length, you won't reassign the existing last element just simply extend the length further. 
                                // The next time you access arr[arr.length - 1], 11 will be the data you access.
            
          console.log(arr); // This will log the arr array with 0 chaned to 10, and 11 added to the end of the array. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
