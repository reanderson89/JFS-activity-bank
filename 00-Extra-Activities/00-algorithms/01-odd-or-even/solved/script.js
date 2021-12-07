const oddOrEven = (array) => {
    let myObj = {
        odd: [],
        even: []
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            myObj.even.push(array[i])
        } else {
            myObj.odd.push(array[i])
        }
    }
    return myObj;
}

let arrayOfInts = [];

let result = oddOrEven(arrayOfInts);

console.log(result.odd);
console.log(result.even);