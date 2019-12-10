import React from 'react';
import ProductStore from "./ProductStore";

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {products : [{name : 'Apple', price : 5}]}
    }

    _onChange(){
        this.setState({products : ProductStore._products});
    }

    componentDidMount(){
        ProductStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onChange)
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
                {this.state.products.map((product)=>{
                    return(<tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>)
                })}
                </tbody>
                <tfoot>
                <td>Total Price</td>
                <td>
                    {this.state.products.reduce(
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
    
