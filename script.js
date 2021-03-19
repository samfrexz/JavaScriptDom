// const { function } = require("joi");

let test = document.getElementById('men');
test.textContent = 'confirm that I am working';



// to iterate on te input fields
// const input = document.querySelectorAll('input');
// for(index = 0; index < input.length; index++) {
//   input[index].value = 'yo! bitches';
// }

let submitClicked = document.getElementById('btn').addEventListener(
  'click', btnClicked);

 function btnClicked (Event) {
  Event.preventDefault();  //this is to prevent the default setting of the browser from reloading whenever the submit button is clicked
  document.getElementById('men').textContent = 'yo! fam, i made it'
}