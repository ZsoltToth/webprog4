import ProductDispatcher from './ProductDispatcher'

class ShoppingCartActions{

    emptyShoppingCart(){
        ProductDispatcher.handleViewAction({
            actionType : 'EMPTY_PRODUCT_LIST',
            payload : null
        })
    }

    loadDummyShoppingCart(){
        ProductDispatcher.handleViewAction({
            actionType : 'LOAD_DUMMY_PRODUCT_LIST',
            payload : null
        })
    }

    deleteProductByName(productName){
        ProductDispatcher.handleViewAction({
            actionType : 'DELETE_PRODUCT_BY_NAME',
            payload : productName
        })
    }

    insertProduct(product){
        ProductDispatcher.handleViewAction({
            actionType : 'INSERT_PRODUCT',
            payload : product
        })
    }
}

export default new ShoppingCartActions();