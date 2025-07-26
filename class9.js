//Take an integer input and print "Fizz" if divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both.

let num=32;

if(num%3===0 && num%5===0){
    console.log("FizzBuzz")
}else if(num%3===0){
    console.log("fizz")
}else if(num%5===0){
    console.log("buzz")
}else{
    console.log("it is not divisible by 3 and 5")
}