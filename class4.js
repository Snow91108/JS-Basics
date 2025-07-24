//Write a program to find the largest of three numbers.

let a=18;
let b=17;
let c=33;
let d=9;
let e=2;

let largest;

if(a>b && a>c && a>d && a>e){
    largest=a;
}else if(b>a && b>c && b>d && b>e){
    largest=b;
}else if(c>b && c>a && c>d && c>e){
    largest=c;
}else if(d>b && d>c && d>a && d>e){
    largest=d;
}else{
    largest=e;
}
console.log("the largest number is :"+largest)
