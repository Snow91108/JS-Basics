// let promise =new Promise((resolve, reject) => {
//     console.log("i am promise");
//     reject("some error occured");
// })

function getData(dataId){
return new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("data",dataId)
    resolve("success");
    if(getNextData){
         getNextData()
    }
  },3000);  
});
}
 