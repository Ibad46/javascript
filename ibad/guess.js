//guess the date
let date=28;
let count=0;

while(true){
let guessdate=parseInt(prompt("guess my birthday"));

if (guessdate<1){
    console.log("we dont have negetive or 0 date");
    count++;
}
else if (guessdate>31){
    console.log("months cant be greater than 31");
    count++;
}
else if (guessdate==date){
    console.log("uh guess correct date");
    count++;
    break;
}
else if (guessdate>date){
    console.log("uh guess greater thn date");
    count++;
}
else if (guessdate<date){
    console.log("uh guess less thn date");
    count++;
}
else {
    console.log("please enter correct input");
    count++;
}

}
console.log("uh guess correct vans in attempt",count);
//console.log(typeof(guessdate));