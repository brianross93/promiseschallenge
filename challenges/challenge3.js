/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 *     ---- The functionality is the same, but async await makes our code more readable and it's easier to follow whats going on
 *          it's returning the string after it's had all of the promise commands executed on it
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 *     ---- it's returning that we have a promise pending. The console is printing out 
 *          that yes indeed a function with a promise inside is there
 * 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *     ----- It will return what we expect, the result of the string after it's run through our promised code
 *            so this is how you accurately activate the promises and functions
 * 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

/**
 * Returns the spaced out thing for spacer
 * @param thing The thing to space out
 */
function spacer(str) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
      if (typeof str === 'string') {
        resolve(str.split('').join(' '));
      } else {
          reject('Pass in string plz');
      }
      }, 500);
  });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spaced = await spacer(uppercasedGreeting)
    return spaced
}




result = greetAndUppercase('Ducky')
console.log(result)


greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })