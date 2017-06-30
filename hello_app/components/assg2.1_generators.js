function* getArmstrong(){
    let no=11;
    while(true)
    {
        if(checkIfArmstrong(no))
        {
            let temp=no;
            no++;
            let reset=yield temp;
            if(reset)
                no=11;
        }
        no++;
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

export function generatorTest(){
    let armstrongItr=getArmstrong();
    console.log(armstrongItr.next().value);
    console.log(armstrongItr.next().value);
    console.log(armstrongItr.next().value); 
}