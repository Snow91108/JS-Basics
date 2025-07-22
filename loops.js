let answer =0;
for(let i=0;i<=100;i++){
    answer+=i;
}
console.log(answer);

//even numbers and odd numbers

const ages=[23,24,25,26,27,28,29,30];
let evenAges=[];
const numberOfPpl = ages.length;
for(let i=0;i<numberOfPpl; i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
} 

//find the biggest number in an array

let numbers=[1,2,3,4,5,6,7];
let max=numbers[0]; 
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log("The biggest number is:", max);

//peoples male name

const allUsers=[{
    fName:"john",
    gender:"male"
},
{
   fName:"snow",
    gender:"male"  
},
{
     fName:"priya",
    gender:"female"
}
]

for(let i=0;i<allUsers.length;i++){
if(allUsers[i]["gender"]=="male"){
    console.log(allUsers[i]["fName"])
}
}

//sum of two numbers 

function sumOfTwoNumbers(a,b){
    const sum=a+b;
    return sum;
}
const sum=sumOfTwoNumbers(2,3);
console.log(sum);

//display function
function display(num){
    console.log(num);
}
display(9);

//calculator function

function calculat(a,b,c){
    if(c=="sum"){
        return a+b;
    }
    if(c=="minus"){
        return a-b;
    }    
}
const result= calculat(2,7,"minus")
    console.log(result);

