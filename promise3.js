function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some code1")
        },2000)
    })
}

