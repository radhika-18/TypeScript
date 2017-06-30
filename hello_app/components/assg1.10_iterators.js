let armstrong={
    [Symbol.iterator](){
        let no=11;        
        return{
            next(){
                while(true)
                {
                    if(checkIfArmstrong(no))
                    {
                        let temp=no;
                        no++;
                        return temp;
                    }
                    no++;
                }
            }
        }
    }
}


function checkIfArmstrong(number){
    let tempNumber=number;
    let sum=0;
    let pow=getPower(number);
    while(tempNumber!=0){
        sum+=Math.pow((tempNumber%10),pow);
        tempNumber=Math.floor(tempNumber/10);
    }
    if(sum==number)
        return true;
    else 
        return false;
}


function getPower(num){
    let count=0;
    while(num!=0){
        count++;
        num=Math.floor(num/10);
    }
    return count;
}

export function itertorTest(){
    let armstrongItr=armstrong[Symbol.iterator]();
    console.log(armstrongItr.next());
    console.log(armstrongItr.next());
    console.log(armstrongItr.next());
    console.log(armstrongItr.next());
    console.log(armstrongItr.next());
    console.log(armstrongItr.next());    
}