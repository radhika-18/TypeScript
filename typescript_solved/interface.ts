interface IPrintable{
    print:()=>void
}

let circles:IPrintable={
    print:()=>console.log("inside circle object")    
}

let employee:IPrintable={
    print:()=>console.log("inside employee object")
}

function printAll(circle,employee){
    circle.print();
    employee.print();
}

printAll(circles,employee);