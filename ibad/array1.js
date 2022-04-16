const car=["bmw","merc","skoda"];
const bike=new Array("bmw","ducati","honda");
const airplane=["business","first","economy"];
const cycle=car.concat(bike,airplane);//do yaa usse zyada arrays ko merge karega
console.log(cycle);
car.splice(1,0,"buggati");//first index ka number batayega value kaha jayegi or second value gayab karega 
console.log(car);
const a=cycle.slice(2);//value delete karega 
console.log(a);
let text="";
bike.forEach(function(value){
    text+= value + " ";
    
})
console.log(text);