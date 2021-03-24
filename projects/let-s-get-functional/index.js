// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./calebbbbs.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var maleArray = _.filter(array, function(customerObj){
        return customerObj["gender"] === "male";
    });
    return maleArray.length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(resultObj, customerObj){
        if(customerObj["gender"] === "female") {
            resultObj += 1;   
        }
        return resultObj;
    }, 0);
};
    

 var oldestCustomer = function(array){
    var count = 0;
    var nema;
    _.each(array, function(val, i, col){
        if(val["age"] >= count){
            count = val["age"]; 
            nema = val["name"];
        }
    });
    return nema;
};  

var youngestCustomer = function(array){
    var count2 = 100;
    var naem;
    _.each(array, function(val, i, col){
        if(val.age < count2){
            count2 = val.age;
            naem = val.name;
        }
    });
    return naem;
};

var averageBalance = function(array) {
    return _.reduce(array, function(resultObj, customerObj){
        if(customerObj["balance"]){
            resultObj += customerObj["balance"].slice();
        }
        return +resultObj.slice(1) / array.length;
    }, 0);
};

var firstLetterCount = function(array, letter){
    var output = 0;
    _.each(array, function(val, i, col){
        if(val.name[0].toUpperCase() === letter.toUpperCase()){
            output += 1;
        }
    });
    return output;
};

var friendFirstLetterCount = function(array, customer, letter){
    var output = 0; 
    _.each(array, function(val, i, col){
        if(val.name[0].toUpperCase() === letter.toUpperCase()){
             output +=1;
        }
    });
    return output;
};

var friendsCount = function(array, name){
    let friend = [];
    _.each(array, function(val, i, col){
        if (val.friends.includes(name)){
            return friend.push(name);
        }
        
    });
    return friend;
};

var topThreeTags = function(array){
    var topThree = [];
    var words = _.reduce(array, function(resultObj, tags){
        if(resultObj[tags]){
            resultObj[tags] += 1;
        } else {
            resultObj[tags] = 1;
        }
        return resultObj;
    }, {});
    for (var tags in words){
        if(words[tags] <= 3){
            return topThree.push(tags);
        }
        
    }
    return topThree;
};

var genderCount= function(array){
    return _.reduce(array, function(resultObj, customerObj){
        if(resultObj[customerObj.gender]) {
            resultObj[customerObj.gender] += 1;
        } else {
            resultObj[customerObj.gender] = 1;
        }
    return resultObj;
    }, {});
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
