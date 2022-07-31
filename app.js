// set initial count
let count = 0;

// create constant for document elements which we will manipulate

const display = document.getElementById("display-value");
const decreaseButton = document.getElementById("button1");
const resetButton = document.getElementById("button2");
const increaseButton = document.getElementById("button3");


decreaseButton.addEventListener("click", function(){

  count -= 1;
  display.innerHTML = count;

});

increaseButton.addEventListener("click", function(){

  count += 1;
  display.innerHTML = count;

});

resetButton.addEventListener("click", function(){

  count = 0;
  display.innerHTML = count;

});
