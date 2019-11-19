import React from 'react';

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.products);
        return (
            <table>
                <thead>
                <tr>
                    <td>Product</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                {this.props.products.map((product)=>{
                    return(<tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>)
                })}
                </tbody>
                <tfoot>
                <td>Total Price</td>
                <td>
                    {this.props.products.reduce(
                    (total, current)=>{return total + current.price},
                        0
                    )}
                    </td>
                </tfoot>
            </table>
            );
    }
}

export default ShoppingCart;
    
