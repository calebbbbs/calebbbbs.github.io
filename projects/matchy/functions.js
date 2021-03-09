/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//array is for animals array
//string is for the name of animal to perform a search

function search (animals, string) {
    for (let i = 0; i < animals.length; i++) {
        if (string === animals[i]['name']){
            return animals[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement){
    for (let i = 0; i < animals.length; i++) {
        let index = animals.indexOf(animals[i]['name']);
        if (animals[i]['name'] === name){
            return animals.splice(index, 1, replacement);
        }
    }
    //.splice([i], 1, replacement)
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
   //let aa = []
   for (let i = 0; i < animals.length; i++) {
        let index = animals[i]['name'];
        if (animals[i]['name'] === name) {
            return animals.splice(index, 1);
        }
    }
    
   }


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    for (var animalObj of animals){
        if (animal.name.length > 0 && animal.species.length > 0 && animalObj.name !== animal.name) {
            animals.push(animal);
            break;
        } else {
            break;
        }
    
    } 
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
