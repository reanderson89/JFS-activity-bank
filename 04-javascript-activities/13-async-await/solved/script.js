let isHungry = 23;

const checkHunger = () => {
    return new Promise((resolve, reject) => {
        if(isHungry === true){
            resolve("Go get something to eat.")
        } else if (isHungry === false) {
            reject("Don't eat. Go do something else.")
        } else {
            reject("Some other type of data");
        }
    })

}

// this function handles our promise that is returned
const checkForHunger = async () => {
    try {
        let checksHunger = await checkHunger();
        console.log(checksHunger);
    } catch (err) {
        console.log(err);
    } 
}
checkForHunger();

// const runThisFunc = () => {
// checkHunger().then(message => {
//     console.log(message);
// }).catch(err => {
//     console.log(err);
// })
// }

// runThisFunc();