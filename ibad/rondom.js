//let a=Math.floor(Math.random()*10)+1;
//console.log("a is",a);

function randomNum(min,max){
   let s= Math.floor(Math.random()* (max - min+1))+min;
   console.log(s);

}
randomNum(0,10);
randomNum(10,100);