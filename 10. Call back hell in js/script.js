console.log("one");
console.log("two");
setTimeout(function(){
    console.log("this will be exceuted after 3seconds!");
},3000)
console.log("three");



function getCandies(callback1){
    setTimeout(()=>{
        const candies="🍫"
        console.log("in our getcandies method",candies);
       // return candies;
       callback1(candies) //undefined
    },3000);
    
}
function handOverKeys(candies,callback2){
    setTimeout(()=>{
        const keys=candies+"🔑";
        console.log("in our handOverKeys method",keys);
        callback2(keys);
    },3000);
}
function onboarding(keys,callback3){
    setTimeout(()=>{
        const onboarded=keys+"🏩";
        console.log("in our handover keys method",onboarded);
        callback3(onboarded)
    },3000);
}
getCandies((candies)=>{
    handOverKeys(candies,(keys)=>{
        onboarding(keys,(onboarded)=>{
           // console.log("welcome to our restraunt",onboarded);
        })
        console.log("here is ur key and candies ",keys);
    })
   // console.log("there is our candy",candies);
})
