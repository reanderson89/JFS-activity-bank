let count = 0;
let incrementElement = document.querySelector('#increment');
let decrementElement = document.querySelector('#decrement');
let countElement = document.querySelector('#count');

function setCounter(){
  countElement.textContent = count;
}

// This function is being called in the html as an "onclick"
const increment = () => {
  count++;
  setCounter()
}

// This function is being called in the html as an "onclick"
const decrement = () => {
  if(count > 0){
    count--;
    setCounter()
  }
}

// incrementElement.addEventListener('click', function(){
//   count++;
//   setCounter()
// })

// decrementElement.addEventListener('click', function(){
//   if(count > 0){
//   count--;
//   setCounter()
//   }
// })

console.log(window);