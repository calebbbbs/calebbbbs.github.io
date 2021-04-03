// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce(function(element, array){
    return element.concat(array)
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }

function loop(n, test, update, log) {
  for (let val = n; test(val); val = update(val)){
    log(val);
  }
}

//loop(3, n => n > 0, n => n - 1, console.log);
// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  var it = true;
  array.forEach(function(value){
  if(test(value) === false){
    it = false;
  }
  });
  return it;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({
    name
  }) => name != "none");

  let total = scripts.reduce((n, {
    count
  }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({
    name,
    count
  }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}
*/

//return an array of objects

function dominantDirection(str) {
  const arr = countBy(str, function(char){
    //get unicode value for the current character
    const unicode = char.charCodeAt();
    //find the script from the unicode character
    const script = characterScript(unicode)
    if(script != null){
      return script.direction;
    } else {
      return script;
    }
  });
  console.log(arr);
  
  arr.sort(function(a, b) {
    return b.count - a.count;
  })
  return arr[0].name;
}

// find the highest count by sorting


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
