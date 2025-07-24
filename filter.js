let arr=[1,2,3,4,5,6,7,8,9];

let newArr=arr.filter((val)=>{
    return val%2===0;
})
console.log(newArr);

// for(i=0;i<arr.length;i++){   //using for loop
// if(i%2===0){
//     console.log(i);
// }
// }