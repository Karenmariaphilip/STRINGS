// Extract the last four characters from the string below;"extravaganza"
let a = "extravaganza"
console.log({character:a[8]});
console.log({character:a[9]});
console.log({character:a[10]});
console.log({character:a[11]});

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog";
const addString =food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog" Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story ="The quick fox jumps over the lazy dog"
const countThe=(story.match(/the/gi)||[]).length;
const countBrown=(story.match(/brown/gi||[].length));
 console.log("Nummber of occurences of 'the':",countThe);
 console.log("Number of occurences of 'brown':",countBrown);

 // Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell"
console.log({index:string1.indexOf('are')});
console.log({index:string2.indexOf('sitting')})

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let sentence="wonderful"
let uppercaseSentence= sentence.toUpperCase();
console.log({uppercaseSentence})

let words ="amazing, UndERneath";
let lowercaseWords= words.toLowerCase();
console.log({lowercaseWords})

function titleCase(str){
    return str.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase());
}
console.log(titleCase('A wonderful world'));

