const letters =new Set(["a","b","c"]);//new sett
const a="m";
const b="o";//var assign krke add ki gayi haiiii 
const c="n";
const d="i";

letters.add("d");//directly add ki gayi haiiii 
letters.add("b");

letters.add(2);
letters.add(a);
letters.add(b);
letters.add(c);
letters.add(d);

//console.log (letters.size);


let text="";
letters.forEach(function(value){
    text+=value;
    
})
console.log(text);