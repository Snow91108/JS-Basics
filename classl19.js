//Create a loop that prints a right-angled triangle pattern like this

let rows=5;

for(let i=1;i<=rows;i++){
    let stars="";
    for(let j=1;j<=i;j++){
     stars+= "*"
    }
    console.log(stars);
}
