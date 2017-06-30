var circles = {
    print: function () { return console.log("inside circle object"); }
};
var employee = {
    print: function () { return console.log("inside employee object"); }
};
function printAll(circle, employee) {
    circle.print();
    employee.print();
}
printAll(circles, employee);
