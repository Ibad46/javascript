const marks=[33,34,14,99,55,45];
marks[1]=36;
marks[6]=77;
marks[7]=20;
console.log(marks[1]);
console.log(marks.sort());
console.log(marks.reverse());

const book=new Array("math","english","hindi","marathi",55);
var a=44;
book.push("history");//add hongi value last meiiiiiiiii
book.pop();//last index gayab 
console.log(book.sort());
console.log(Array.isArray(marks));
console.log(book instanceof Array);
console.log(book.join("*"));
book.shift();//first index gayab
book.unshift("urdu");//first index pr value add hongi
console.log(book);
delete book[2];
console.log(book);
const student= marks.concat(book);
console.log(student);