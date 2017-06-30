class Person{
    name:string;

    constructor(name:string){
        this.name=name;
    }

    dance(){
        console.log(this.name+" is dancing");
    }
}

class AwesomePerson extends Person{
    dance(){        
        super.dance();
        console.log("so awsome");
    }
}

var bran=new Person("bran");
bran.dance();


var robb=new AwesomePerson("rob");
robb.dance();