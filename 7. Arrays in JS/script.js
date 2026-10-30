let arr=[1,2,3,4];
let names=["abc","xyz","pqr"];

//indexing starts from zero

console.log(names);
console.log(names[2]);
console.log(names[8]);  // gets undefined
console.log(names.indexOf("xyz"));


// we can store hetrogenous data also

let data=[1,"hi",123.45,'A',true]
console.log(data);
console.log(typeof(data[3]));

//length of array
console.log(data.length);

//updating an array
data[2]="kruthi";
console.log("updated array",data);

//memory location
let newarr=data;
newarr[0]="bye";
console.log("after changing",newarr);
console.log("old one",data);

//METHODS OR INBUILT FUNCTIONS

console.log(data.includes(123)); // prints false as 123 isnt present.
data.push("mobile"); // we can append the data at end of array
console.log("after pushing",data);
data.unshift("laptop"); // unshift for addig at the beginning
console.log("added at starting",data);
data.pop(); // pop() for deleting at the end of array
console.log("data deleted at end",data)
data.shift()//dletes at start of array
console.log(data);
let marks=[98,45,76,87,90];
console.log(marks);
marks.sort();   //sorted array
console.log(marks);
let subarray=marks.slice(2,4);  // 1st index is included and last index is excluded
console.log(subarray);
