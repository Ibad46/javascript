let num =6;
while (true){
let guess=parseInt(prompt("enter ur guess between 1 to 10"));
if (guess==num){
    console.log("uh guess the correct number");
   break;
} 
else if (guess>num){
    console.log("uh guess greater thn number");
}

else if (guess<num){
    console.log("uh guess lessthan number");
}
else {
    console.log("please enter correct input");
}}