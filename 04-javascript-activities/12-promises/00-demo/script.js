//  DEMO ONE: Basic promise set up

// Create a variable and set it to a new promise object
// Will take 1 parameter, which is a function
//    that function takes TWO parameters of resolve & reject
let p = new Promise((resolve, reject) => {
    // define what the actual promise is
    let a = 1 + 2;
    if ( a === 2){
        resolve('Success!');
    } else {
        reject('Failed');
    }
});
// .then says that IF the promise is resolved THEN I promise to do xyz 
p.then((message) => {
    console.log( message);
})
// .catch says if the promise is REJECTED then I will do this 
.catch((message) => {
    console.log(message);
})







//  Demo Two: Refactor from callback function

const studentAsleep = false;
const studentLearning = true;

// function watchInstructorDemo(callback, errCallback) {
//   if (studentAsleep) {
//     errCallback({
//       name: "Student",
//       message: "=(",
//     });
//   } else if (studentLearning) {
//     errCallback({
//       name: "Student is sleeping.",
//       message: "Instructor needs to be more fun.",
//     });
//   } else {
//     callback("Let's all go take a break.");
//   }
// }


// watchInstructorDemo((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })


// make it a promise instead of a callback
function watchInstructorDemoPromise() {
    return new Promise((resolve, reject) => {
        if (studentAsleep) {
            reject({
              name: "Student",
              message: "=(",
            });
          } else {
            resolve({
              name: "Renan is learning.",
              message: "Instructor IS fun.",
            });
          } 
    })
  }

  watchInstructorDemoPromise().then((message) => {
    console.log(message.name);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
});





// Demo Three: Promise.all()

const runErrands = new Promise((resolve, reject) => {
    resolve("Ran errands");
  });
  
  const takeANap = new Promise((resolve, reject) => {
    resolve("Took a nap");
  });
  
  const watchTV = new Promise((resolve, reject) => {
    resolve("Watched too much netflix.");
  });


  Promise.all([
      runErrands,
      takeANap,
      watchTV
  ]).then((message) => {
      console.log (message);
  })