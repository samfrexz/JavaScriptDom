<!-- Explanation of event listener -->

The event listeners are just like event handlers, except that you can assign as many event listeners as you like to a particular event on particular element.

To understand how event listeners actually works let's check out a simple example. Suppose that you've created two functions and you try to execute both of them on click of the button using the onclick event handler, as shown in the following example:

The syntax: element.addEventListener(event, function, useCapture);

examples:
<button id="myBtn">Try it</button>

<script>
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
</script>
