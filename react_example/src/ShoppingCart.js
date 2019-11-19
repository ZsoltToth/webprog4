import React from 'react';

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <p>Hello {this.props.name}</p>);
    }
}

export default ShoppingCart;
    
