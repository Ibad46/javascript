let num=5;
while(true){
let guess=prompt("guess the num between 1-10");
if (guess==num){
    console.log("you guess the correct num");
    break;
}
else if (guess>num){
    console.log("ur guess is higher");
}
else if (guess<num){
    console.log("ur guess is less");
}
else {
    console.log("please enter correct input");
}
}