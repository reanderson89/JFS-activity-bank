
// "async-await" is just syntactic-sugar (it doesn't do anything new and special it is just a different way write code to handle a promise that might look easier to read). Start with creating a function that returns a Promise() and handle it using the .then() and .catch() methods.

// then with the "async" keyword. Show that you can create a function using just the "async" keyword that returns a promise implicitly and how we can still use the  .then() and .catch() methods. We do not need to create a Promise() when we use async.

    // const checkForHunger = async () => {
        //     if(isHungry === true){
        //         return "Go get something to eat."
        //     } else if (isHungry === false) {
        //         return "Don't eat. Go do something else."
        //     } else {
        //         return "Some other type of data"
        //     }
        // }
        
        // checkForHunger().then(message => {
        //     console.log(message);
        // })


// then show how to use the "await" keyword to store the result of the promise to a variable, and then console.log it or perform some code with it.


// finish by showing how to handle errors using the "try" and "catch" keywords



