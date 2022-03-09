// use local storage to manage cart data
const addToDb = id =>{
    const quantity = localStorage.getItem(id);
    if(!quantity){
        localStorage.setItem(id, 1);
    }
    else{
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
}

export {addToDb}