class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }
    getBalance(){
        return this.balance;
    }
}

class SavingAccount extends Account{
    constructor(id,name,balance,interest){
        super(id,name,balance);
        this.interest=interest;
    }
    getAccountBalance(){
        return super.getBalance()+ this.interest;
    }
}

class CurrentAccount extends Account{
     constructor(id,name,balance,cash_credit){
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }
    getAccountBalance(){
        return super.getBalance()+ this.cash_credit;
    }
}

export default function classesTest(){
    let savingObj1=new SavingAccount(1,"David",25000,3400);
    let savingObj2=new SavingAccount(2,"Matt",35000,3400);
    let currentObj1=new CurrentAccount(3,"Lisa",45000,1500);
    let currentObj2=new CurrentAccount(4,"Mathew",50000,1300);
    let accounts=[];
    accounts.push(savingObj1,savingObj2,currentObj1,currentObj2);
    return getTotalBalance(accounts);
}   

function getTotalBalance(arr){
    let sum=0;
    for(let acc of arr){
        sum+=acc.getAccountBalance();
    }
    return sum;
}
