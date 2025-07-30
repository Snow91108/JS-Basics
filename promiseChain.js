function getData(dataId,nextdata){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("success")
            if(nextdata){
                nextdata();
            }
        },2000);
    });
}

//Promis Chain

getData(1)
.then((res)=>{
    return getData(2)
})
.then((res)=>{
    return getData(3)
})
.then((res)=>{
    return getData(res)
})



