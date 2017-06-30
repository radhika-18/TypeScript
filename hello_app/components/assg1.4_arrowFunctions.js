export function arrowFunctions(){
    let array1=['Matt','Mathew','David'];
    let array2=[];
    array1.forEach(n=>{
        array2.push({name:n,length:n.length})
    });
    return array2;
}