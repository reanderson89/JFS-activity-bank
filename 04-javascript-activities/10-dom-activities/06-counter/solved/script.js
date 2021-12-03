let count = 0;
let incrementElement = document.querySelector('#increment');
let decrementElement = document.querySelector('#decrement');
let countElement = document.querySelector('#count');

function setCounter(){
  countElement.textContent = count;
}

incrementElement.addEventListener('click', function(){
  count++;
  setCounter()
})

decrementElement.addEventListener('click', function(){
  if(count > 0){
  count--;
  setCounter()
  }
})