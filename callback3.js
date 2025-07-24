function main(a,b,func){
    const res = func(a+3,b+3)
    console.log(res)
}

function multi(c,d){
return  c*d;
}
main(3,3,multi);