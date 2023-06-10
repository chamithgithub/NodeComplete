const fun =(a,b)=>{
    const c =a*a
    const d =c*a

    b(c,d)
}
fun(4,(Number1,Number2)=>{
    console.log("num 1 :",Number1);
    console.log("num 2 :",Number2);
})