import {Dispatcher} from 'flux'
import ProductStore from "./ProductStore";

class ProductDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            action : action
        });
    }
}

const dispatcher = new ProductDispatcher();

dispatcher.register((data)=>{
    if(data.action.actionType !== 'EMPTY_PRODUCT_LIST'){
        return;
    }
    ProductStore._products = [];
    ProductStore.emitChange();
});

dispatcher.register((data)=>{
    if(data.action.actionType !== 'LOAD_DUMMY_PRODUCT_LIST'){
        return;
    }
    ProductStore._products = [
        {name : 'Apple', price : 5},
        {name : 'Banana', price : 5},
        {name : 'Cherry', price : 5}
    ];
    ProductStore.emitChange();
});

export default dispatcher;




