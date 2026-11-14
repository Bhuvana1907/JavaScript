const ticket = new Promise(function(resolve,reject){
    const isBoarded = false;
    if(isBoarded){
        resolve("you are elgible to onboard");
    }
    else{
        reject("you are not elgible to onboard");
    }
})
ticket.then((data)=>{
    console.log("wohooo ",data);
}).catch((data)=>{
    console.log("oh no",data);

}).finally(()=>{
    console.log("this will be executed all time");
})

function getCandies(){
    return new Promise((resolve,reject)=>{
       
        //resolve("success");
        setTimeout(()=>{
        const candies = "🍫";
        console.log("In our getcandies method",candies);
        resolve(candies);
        

    },3000);
})
}
function handOverKeys(candies){
    return new Promise((resolve,reject)=>{
        //reject("Denied")
        setTimeout(()=>{
            const keys=candies + "🔑";
            console.log("in our get candies method",keys);
            resolve(keys)
        },3000);
        })
    }
    function onboarding(keys){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const onboarded=keys+"🏩";
                resolve(keys)
            },3000);
        })
    }
    getCandies()
    .then((candies)=>{
        console.log("here is the candy",candies);
        return handOverKeys(candies);
    })
    .then ((keys)=>{
        console.log("here is the key",keys);
        return onboarding (keys)
    })
    .then((onboarded)=>{
        console.log("welcome to the restraunt",onboarded);
    })
    //.catch((err)=>{
      //  console.log("error occured",err);
    //})
    //.finally(()=>{
    //    console.log("happy to assist youuuuuu");
    //})
   


    
    