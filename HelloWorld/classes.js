var Starks = (function () {
    function Starks() {
        this.name = "kstw";
        this.saying = "gdkmg";
    }
    Starks.prototype.hello = function (person) {
        console.log("hello " + person);
    };
    return Starks;
}());
Starks.castle = "fsdfdf";
var ned = new Starks();
ned.saying = "sdfsdf";
console.log(Starks.castle);
ned.hello("sfsdf");
