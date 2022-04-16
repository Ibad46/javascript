let name1="ibad ur rehman shaikh";

console.log(name1.length);
x=name1.slice(5,20);
console.log(x);
y=name1.slice(-13,-5);
console.log(y);
z=name1.slice(6);
console.log(z);
i=name1.substring(1,5);
console.log(i);
m=name1.substr(7,5);//pehla wala starting sehoga second wala uski length decide karega
console.log(m);
n=name1.replace("rehman","Rehman");
console.log(n);

console.log(name1.indexOf("john"));//text kitne number pr haiii wohh batayega
console.log(name1.search("rehman"));//text search number ki index batayega
console.log(name1.startsWith("ibad"));//text ka pehla word dekhega sahi huwaa tohhh true nhiii tohh false
console.log(name1.endsWith("shaikh"));//text ka last word dekhega sahi huwaa tohhh true nhiii tohh false
console.log(name1.startsWith("ur",5));