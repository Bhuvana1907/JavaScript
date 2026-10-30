const a=10;
const b=10;
sum(a,b); 
 const c=10;
 const g=12;
 const resultofcandg=summation(c,g);
 console.log(resultofcandg);
 console.log(summation(5,5));

//func def(named function)

function sum(r,k){
    const result=r+k;
    console.log(result);
}
//func call
sum(20,30);
function greet(){
    console.log("hey! welcome");
}
greet();

function greet(name){
    console.log("hey! welcome",name);
}
greet("kruthi");

function summation(r,k){
    const res=r+k;
    return res;
}

//Anonymous func/Func expression      // no function name
let ans=function(r,k){
    const val=r+k;
    return val;
}
console.log(ans(11,11));

//Nested Functions --->scoping: global can be accesed while local cant.
function addsquare(x,y){
    function square(num){
        return num*num;
    }
    console.log(square(4));

}
addsquare(1,2);
