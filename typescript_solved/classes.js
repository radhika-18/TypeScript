//Assignment 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Accounts = (function () {
    function Accounts(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Accounts.prototype.getBalance = function () {
        return this.balance;
    };
    return Accounts;
}());
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingsAccount.prototype.getAccountBalance = function () {
        return _super.prototype.getBalance.call(this) + this.interest;
    };
    return SavingsAccount;
}(Accounts));
var CurrentAccount = (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount.prototype.getAccountBalance = function () {
        return _super.prototype.getBalance.call(this) + this.cash_credit;
    };
    return CurrentAccount;
}(Accounts));
function classesTest() {
    var savingObj1 = new SavingsAccount(1, "David", 25000, 3400);
    var savingObj2 = new SavingsAccount(2, "Matt", 35000, 3400);
    var currentObj1 = new CurrentAccount(3, "Lisa", 45000, 1500);
    var currentObj2 = new CurrentAccount(4, "Mathew", 50000, 1300);
    var accounts = [];
    accounts.push(savingObj1, savingObj2, currentObj1, currentObj2);
    console.log(getTotalBalance(accounts));
}
function getTotalBalance(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var acc = arr_1[_i];
        sum += acc.getAccountBalance();
    }
    return sum;
}
classesTest();
