//Assignment 1

class Accounts{
    id:number;
    name:string;
    balance:number;

    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }

    getBalance():number{
        return this.balance;
    }


}

class SavingsAccount extends Accounts{
    interest:number;

    constructor(id:number,name:string,balance:number,interest:number){
        super(id,name,balance);
        this.interest=interest;
    }

    getAccountBalance():number{
        return super.getBalance()+ this.interest;
    }

}

class CurrentAccount extends Accounts{
    cash_credit:number;

    constructor(id:number,name:string,balance:number,cash_credit:number){
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }

    getAccountBalance():number{
        return super.getBalance()+ this.cash_credit;
    }

}

function classesTest():void{
    let savingObj1=new SavingsAccount(1,"David",25000,3400);
    let savingObj2=new SavingsAccount(2,"Matt",35000,3400);
    let currentObj1=new CurrentAccount(3,"Lisa",45000,1500);
    let currentObj2=new CurrentAccount(4,"Mathew",50000,1300);
    let accounts=[];
    accounts.push(savingObj1,savingObj2,currentObj1,currentObj2);
    console.log(getTotalBalance(accounts));
} 


function getTotalBalance(arr):number{
    let sum=0;
    for(let acc of arr){
        sum+=acc.getAccountBalance();
    }
    return sum;
}

classesTest();