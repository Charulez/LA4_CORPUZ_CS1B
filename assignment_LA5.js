// CORPUZ CHARLES ADRIAN
// BSCS-1B
// Queueing System using Hash (Object)

var hashTable = {}; // key: number, value: customer name
var names = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Simple hash function: index + 1 as key
for (var i = 0; i < names.length; i++) {
  var key = i + 1;
  hashTable[key] = names[i];
  alert("Hi " + names[i] + "! Your number is: " + key);
}

// Display the hash table
console.log("Initial Hashed Table:");
console.log(hashTable);

// Servicing customers
for (var i = 0; i < 5; i++) {
  var num = prompt("Enter customer number to service (1-5):");
  var key = parseInt(num);

  if (hashTable[key]) {
    alert("Now servicing: " + hashTable[key]);
    delete hashTable[key]; // remove serviced customer
    console.log("Updated Hashed Table:");
    console.log(hashTable);
  } else {
    alert("Invalid or already serviced number.");
  }
}