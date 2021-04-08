/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 * 
 *    ------I think that the greet function will run, and then the uppercase function will run. Lets see.
 * 
 *    ------Okay that's what happened and now I understand why there's variables down there
 *
 * 
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 * 
 *    -------If greet fails then the uppercase function will not run, I think that's because
 *            the "catch" condition is activated so we exit our of the logic that would normally make us go 
 *           to the uppercase function 
 * 
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 *          -------If greet succeeds then the program is run as normal, but the 
 *                error for uppercase will be displayed as the input is not a string
 * 
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
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
    }, 1000);
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
        }, 1500);
    });
}

/**
  * Asynchronously returns spaced out word.
  * @param thing The thing we want to space out
  */

 function spacer(thing) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof thing === 'string') { 
        resolve(thing.split('').join(' '));
      } else {
        reject('Name must be a string!');
      }
    }, 2500);
  });
}

name = "Brian"
my_str = "Hello there"
thing = "foo"



greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(thing)
    })
    .then((spacerResult) => {
      console.log(spacerResult)
      
  })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
