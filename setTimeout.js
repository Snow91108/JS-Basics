function getData(dataId, getNextData){
setTimeout(()=>{
    console.log("data",dataId)
    if(getNextData){
        getNextData();
    }
},3000);
}
//call Back hell
getData(1, ()=>{
    console.log("getting data 2...")
    getData(2, ()=>{
         console.log("getting data 3...")
        getData(3, ()=>{
             console.log("getting data 4...")
            getData(4, ()=>{

            })

        })
    })
});