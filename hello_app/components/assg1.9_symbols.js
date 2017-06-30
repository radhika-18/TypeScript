const previousNumber=Symbol();
const currentNumber=Symbol();
        
class Fibonacci{

    constructor(){
        this[previousNumber]=0;
        this[currentNumber]=1;
    }
    
    next()
    {
        let temp=this[previousNumber]+this[currentNumber];
        this[previousNumber]=this[currentNumber];        
        this[currentNumber]=temp;
        return { value:this[currentNumber],done:false};
    }
        
}

export function symbolTest(){
    let fibonaaciObj= new Fibonacci();    
    let random=Math.floor((Math.random()*10)+1);
    while(random-->0)
        console.log(fibonaaciObj.next().value);
}