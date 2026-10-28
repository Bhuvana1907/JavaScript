console.log("first line of the program flow")
const candidate_age=276;

//if condtn 
if(candidate_age>=18){
    console.log("eligible");
    console.log("dummy inner log");
}
console.log("not elgible");
// if - else condtion
if(candidate_age>=18){
 console.log("elgible");
    console.log("dummy inner log");
}
else{
   console.log("hey you cant vote");
}
console.log("last line of the program");

// nested if
if(candidate_age>=18){
    if(candidate_age>=60){
        console.log("senior citizens are elgible to vote online !!");
    }
    console.log("you can vote");
}
else{
    console.log("not elgible");
}

//else if
if(candidate_age>=60){
    console.log("senior can vote")
}
else if(candidate_age>=18){
    console.log("younger citizens can vote")
}
else{
    console.log("u can vote");
}
console.log("last line");


//eg:
const score=87;
if(score>=90){
    console.log("A+");
}
else if(score>=80){
    console.log("B+");
}
else if(score>=50){
    console.log("C+")
}
else{
    console.log("Need to improve");
}

//ternaray operator
//condition ? true: false;
candidate_age1=52;
candidate_age1>18? console.log("yes") : console.log("no");
