/**
 *  LOOPS
 *  [0]. Loops allow you to be able to do something repeatedly quickly, like say print the numbers 1-100. The situation dictates which types of loops are needed. 
 *  [1]. You can loop through anything with an index, like strings and arrays. Although the for..in loop allows you to loop through they keys of an object, it is not
 *       the same as being looped through by index. 
 *  [2]. Loops are predicated with a starting point, and a end point. If end point causes the loop to go forever, or never break the loop, an infinite loop will occur
 *       and crash the system.
 *  [3]. Known as a control construct, the different outcomes to the loops provide a different flow of data processing. 
 * 
 */
 
//  For, for..in, and while loops //
/*
    For loops are commonly used to loop over arrays. You begin a for loop with the keyword for, followed by () filled with three expressions. 
        The first expression is the counter, the second is the end point, and the third is performed once the loop ends and is commonly used as the iterator.
*/        

            function to100(){
                for(let i = 0; i <= 100; i++){
                    console.log(i);
                }
            }
        
        //This will log 0-100 to the console. It would log any number between whatever the second expression is set to. When accessing an array, you have to use the 
        //.length property to access the elements.
        
            let arry = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            function forwardArray(array){
                for (let i = 0; i <= array.length; i++){
                        console.log(i);
                    }
            }
            
            forwardArray(arry);
            
        // By logging i to the console, we are able to print the element at each index of the array from front to back. Console logs: 0, 1, 2, 3, 4, 5, 6, 7, 8 
        
            function reverseArray(array){
                for (let i = array.length; i >= 0; i--){
                    console.log(array[i]);
                }
            }

            reverseArray(arry);
            
        // The reverseArray function takes an array, and prints it in reverse, so the console had 8, 7, 6, 5, 4, 3, 2, 1, 0 printed to it. 
        
        
/*
    While loops are meant to be used when there is no set timetable for your loop to end. Take a video game for instance, the timer of a video game for some games is as
    long as the character is alive. It would be hard to write that with a for loop, so we deploy the while loop in this scenario. While loops are similar to for loops, 
    but also different. Instead of having a variable declared inside of the loop like with the for loop, the starting variable is declared outside of the while loop. The iterator
    is to be put at the end of the code block. Be careful to not set the end of your loop to be out of reach or infinite, the computer will crash. Infinite loop is the term. 
*/

            function wildWhile() {
                let i = 0;
                while(i <= 50){
                    console.log(i);
                    i++;
                }
            }

            wildWhile();
            
        //The console will log 0-50 because when the loop reached 50, it broke the loop and it was finished. Typically you would have this set to a an unknown amount of time,
        //and are used less frequently than for loops because most of the time you have a good idea of how long something will last. But for those times when you don't you have while loops.
        
        
/*
    So looping through an object would be impossible, because they do not have indexes. But the for...in loop allows us to loop over the keys of the object, and thus
    access the value at each key. The syntax is different than the traditional loop like we have used thus far. For...in loops do not use the counter, or endpoint, or iterator.
    They syntax is, for (var key in object){}. It does loop through the keys, but not in the same fashion as the for loop does.
*/

            let box = {
                squareOrRectangle: true,
                cardboard: true,
                goodAt: "carrying stuff"
            };
            
            for(var key in box){
                console.log(key);
            }
            
            // The console logged the name of the keys of the object in order so, squareOrRectangle, cardboard, goodAt. But what if we want the value inside of the keys?
            
            for (var key in box){
                console.log(box[key]);
            }
            
            // The console logged true, true, "carrying stuff", because we were able to access the properties of the keys with bracket notation. 