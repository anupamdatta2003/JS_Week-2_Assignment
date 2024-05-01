function calculateTotalCartValue(){
    let totalPrice = 0;
    for(let i=0; i<arguments.length; i++){
        totalPrice+=arguments[i];
    }
    console.log(`The total cart value is ${totalPrice}`);
    return totalPrice;
}
calculateTotalCartValue(125,20,30);