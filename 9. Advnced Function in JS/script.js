//Named functions --> function is named
function greet(){
    console.log("hey all");
}
greet();
//Anonymous functions /Function expression
let greet2=function(){
    console.log("hey all");
}
greet2();
//Arrow function
let greet3=()=>{
    console.log("hey all");
}
greet3();
const greet4=(count)=>{
    console.log("hello all!",count);
}
greet4()
const square=(num)=>{
    return num*num;
}
console.log(square(2));
//we can also do it simply as
const sq=(n)=> n*n
console.log(sq(4));

//call back functions
//IT  is a function where an argument is passed for another function

const calci=(a,b,operation)=>{
    return operation(a,b)
}

//anonymous function - method 1

const summation = calci(2,3,function(n1,n2){
    return n1+n2;
});
console.log(summation);

//named func- method 2

function sub(a,b){
    return a-b;
}
const subtraction=calci(2,3,sub)
console.log(subtraction);

//arrow func- method 3

const mul=(a,b)=>a*b
const multiplication = calci(2,3,mul)
console.log(multiplication);

const arr= [2,5,6,7,3,4,-1,-4];
//method 1
const printFirstNegativeNumber=(num)=>{
    return num<0
}
//method 2
const printFirstNegativeNumber1=(num)=>num<0
//method 3
const printFirstNegativeNumber2=(num)=>{
    if(num<0){
        return num
    }
}
const result=arr.find(printFirstNegativeNumber);
const result1=arr.findIndex(printFirstNegativeNumber)
console.log(result);
console.log(result1)
arr.forEach((num,index)=>{
    console.log("Element : ",num,"Index: ",index)
})
