export function promisesTest(){
    let promise1=new Promise(function(resolve){
        resolve(5);
    });
    let promise2=new Promise(function(resolve){
        resolve(6);
    });

    Promise.all([promise1,promise2]).then(function (promises){
        let sum=0;
        promises.forEach(function(text){sum+=text});
        console.log(sum);
    });
}