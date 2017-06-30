
export function enhancedObjProp(){
    let OrderObj={
        id:1,
        title:'Object1',
        price:45,
        printOrder(){
            return this.id,this.title,this.price;
        },
        getPrice(){
            return this.price;
        }
    }
    let newOrderObject=Object.assign({},OrderObj);
    OrderObj.printOrder();
    newOrderObject.printOrder();
    OrderObj.getPrice();
    newOrderObject.getPrice();
}