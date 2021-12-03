// create a function that has one parameter
// The parameter will be an array of strings
// create a loop inside the function that prints each string to the terminal

const myFunc = (array) => {
    array.forEach(index => {
        console.log(index);
    })
}

const myFuncLoop = (array) => {
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

module.exports = {myFunc, myFuncLoop};













// export your function