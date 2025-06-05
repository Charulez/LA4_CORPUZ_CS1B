// CORPUZ CHARLES ADRIAN
// BSCS-1B
// Queueing System using Array (for 5 customers)

var customerQueue = []; // holds the customers
var names = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Enqueue customers
for (var i = 0; i < names.length; i++) {
  customerQueue.push(names[i]); // store name in queue
  alert("Hello " + names[i] + "! Your queue number is: " + (i + 1));
}

// Display the current queue
console.log("Initial Queue: " + customerQueue.join(", "));

// Servicing customers
for (var i = 0; i < 5; i++) {
  var num = prompt("Enter customer number to service (1-5):");
  var index = parseInt(num) - 1;

  if (index >= 0 && index < customerQueue.length) {
    var customer = customerQueue[index];
    alert("Now servicing: " + customer);
    customerQueue.splice(index, 1); // remove customer
    console.log("Updated Queue: " + customerQueue.join(", "));
  } else {
    alert("Invalid number. Try again.");
  }
}