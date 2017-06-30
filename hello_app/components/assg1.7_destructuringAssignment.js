export function destructuringAssignment_arrayMatching(){
    let arr1=[1,4,5,9];
    let [,,b,]=arr1;
    // console.log(b);
    return b;
}
export function destructuringAssignment_deepMatching(){
    let orgObj={
        name:"ABC",
        address:{
            city:"Mumbai",
            state:"MAharashtra",
            pin:"400089"
        }
    }
    let {address:{pin}}=orgObj;
    // console.log(pin);
    return pin;
}