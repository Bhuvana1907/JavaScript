// 1. Assignment operator


const a = 5
const b=3;
console.log(a+b);
const sum=a/b;       // we can perform + - / * % also
console.log(sum); 

// increment operator(++)
let abc = 12;
abc++;   //abc= abc+1 --->can also be done
console.log(abc);

//---post increment
let w=10;
console.log(w);  // a: operand , ++ : operator
console.log(w++);   
console.log(a);

//pre increment
let q= 12;
console.log("q:",q);
console.log(++q);

//decrement operator
let bcd=10;
bcd--;
console.log(bcd);   //similarly pre nd post decrement

//exponentiation
let i=2;
let j=3;
const res=(i**j)
console.log(res)

//short hand operator
//a=a+b--->a+=b
//a=a-b---->a-=b;
//similarly * / ** %
//
let var_0 = 2;
let var_1=3;
var_0+=var_1;
console.log(var_0 )


//2. comparision operators


//assignment(=)
//equals(==)
//strict equals(===)
let q1=5;
let q2=5;
console.log(q1==q2)
let q3="5"
console.log("strict equals",a===b)
console.log(q1!==q3)
//console.log(a>=b)

//3. Logical operators

//AND(&&) OR(||) NOT (!)
const z=true;
const x=true;
const result=z && x;
console.log("bool result",result);

const z1=true;
const z2=false;
console.log(z1||z2);

const z3=true;
console.log(!z3)