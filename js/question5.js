var subject1 = prompt("Enter the name of First subject" , "English");
var subject2 = prompt("Enter the name of Second subject" , "Math");
var subject3 = prompt("Enter the name of Third subject" , "Urdu");

const maxmarks = 100;

var marks1 = parseFloat(+prompt("Enter the Marks of " + subject1 , "54")) ;
var marks2 = parseFloat(+prompt("Enter the Marks of " + subject2 , "54")) ;
var marks3 = parseFloat(+prompt("Enter the Marks of " + subject3 , "48")) ;



  console.log("subject  Total Marks  Obtained Marks   Percentage");
  
  console.log("English  " + maxmarks + ("          ") + marks1 + ("                ")  + (marks1 / maxmarks * 100) + ("%")) ;
  
  console.log("Urdu     " + maxmarks + ("          ") + marks2 + ("                ")  + (marks2 / maxmarks * 100) + ("%"));
  
  console.log("Math     " + maxmarks + ("          ") + marks3 + ("                ")   + (marks3 / maxmarks * 100) + ("%"));
  
  console.log(".............................");
  
  console.log("Over all result");
  
  console.log("subject  Total Marks  Total Obtained   Total Percentage");

  console.log("         " + (totalmarks = maxmarks * 3) + ("          ") + (totalobtainedmarks = marks1+ marks2 + marks3) + ("                ")   + (totalobtainedmarks / totalmarks * 100) + ("%"));


