var table = +prompt("Enter a table number" , 5);

for (var i = 1; i <= 10; i++) {
  if (isNaN(table)) {
    console.log("Please enter only a Number.");
  } else {
    console.log(table + " x " + i + " = " + table * i);
  }
}
