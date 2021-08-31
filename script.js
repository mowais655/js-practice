// document.write("My name is owais")
// document.getElementById("text").innerHTML = "owais"

// ===================Perhead amount find App==================

// var foodcost = prompt("Enter the total amount of food cost?");
// var persons = prompt("Enter total perons");
// document.write("Total amount of food cost is ", foodcost, "<br>");
// document.write("Total persons ", persons, " and perhead cost is ", foodcost/persons);

// ==============Institute selection depends on your age App!=================

// alert("Institute selection depends on your age!");
// var age = prompt("please enter your age ");
// if (age>=18 && age<=24){
//   document.write("You are eligible for admission in University");
// }
// else if(age<18 && age>=16){
//   document.write("You are eligible for admission in College");
// }
// else if(age<=15 && age>=3){
//   document.write("You are eligible for admission in School")
// }
// else{
//   document.write("You are not eligible for study")
// }

alert("Institute selection depends on your age!");
var age = prompt("please enter your age ");

switch(age)
{
  case "age>=18 && age<=24":
    document.write("You are eligible for admission in University");
    break;

  case "age<18 && age>=16)":
    document.write("You are eligible for admission in College");
    break;

  case "age<=15 && age>=3":
    document.write("You are eligible for admission in School");
    break;

  default:
    document.write("You are not eligible for study");
    break;
    adsads
    qqqq
}