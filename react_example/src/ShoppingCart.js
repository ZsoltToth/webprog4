import React from 'react';

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <table>
                <thead>
                <tr>
                    <td>Product</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>????</td>
                    <td>?????</td>
                </tr>
                </tbody>
                <tfoot>
                <td>Total Price</td>
                <td>????</td>
                </tfoot>
            </table>
            );
    }
}

export default ShoppingCart;
    
