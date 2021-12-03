// You do not need to do anything to the function

const capitalizeEveryOtherCharacter = (string) => {
let lowerCaseString = string.toLowerCase();
let stringArray = lowerCaseString.split("");
let newStringArray = [];

for(let i = 0; i < stringArray.length; i++){
    if(i % 2 === 0){
        let upperChar = stringArray[i].toUpperCase();
        newStringArray.push(upperChar);
    } else {
        newStringArray.push(stringArray[i]);
    }
}
let newStr = newStringArray.join("");
console.log(newStr);
}

// create your own function that does whatever you want and add it to your export object then use it in your script.js



// create your export down here




