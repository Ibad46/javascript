const ibad=new Set([1,2,3]);
ibad.add(1);
//console.log(ibad.size);
ibad.add(4);
ibad.add(5);
ibad.add(6);
console.log(ibad.delete(5));
console.log(ibad.has(5));

let text="";
ibad.forEach(function(value){
    text+=value;
   
})
console.log(text);
let letters="";
for(const x of ibad.values()){
   letters+=x;
  
} 
console.log(letters);