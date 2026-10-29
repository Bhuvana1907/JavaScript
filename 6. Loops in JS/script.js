//FOR LOOP  -- we use when the no of iterations are known
for(let i=0;i< 10;i++){
    console.log("Bhuvana");  // displays just count
}
for(let i=0;i< 10;i++){
   console.log("Bhuvana",i); // display name along with cnt
}
for(let i=2;i<=16;i+=3){
    console.log(i);          // increment changes by 3
}
for(let i=18;i<=16;i++){
    console.log(i);          // false condition so dont print anything on console
}
for(let i=10;i>0;i--){
    console.log(i);          //decremnet
}

// WHILE LOOP -- we use when iterations are not known
let cnt=0;
while(cnt<5){
    console.log("cnt is",cnt);
    cnt++;
}
//DO-WHILE LOOP -- even the cndtn is false it prints 1 time then checks the condtion
let res=0;
do{
    console.log("res is",res);
    res++
}
while(res<5)

//CONTINUE & BREAK
    let cnt_1=0;
    while(cnt_1<5){
        cnt_1++;
        if(cnt_1==2){
            continue;
        }
         console.log(cnt_1);

    }
 let cnt_2=0;
    while(cnt_2<5){
        cnt_2++;
        if(cnt_2==2){
         break;
        }
         console.log(cnt_2);

    }


