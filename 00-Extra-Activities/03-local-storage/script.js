let myObj = {
    name: "Robert",
    food: "Sushi"
}

let myObjString = JSON.stringify(myObj);

localStorage.setItem("robsInfo", myObjString);

let valueReturned = localStorage.getItem("robsInfo");

let parsedReturn = JSON.parse(valueReturned);

console.log(parsedReturn);
