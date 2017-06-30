interface Stark{
    name: string;
    age?:number;
}

function printname(stark:Stark){
    console.log(stark.name);
}

printname({name:"EDE"});
printname({name:"fjfj "});