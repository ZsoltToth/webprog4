import React from 'react';

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <p>Hello
                {this.props.name !== undefined &&
            this.props.name}
            {this.props.name === undefined &&
            "World"}
                /*{this.props.name !== undefined ? this.props.name : "World"}*/
            </p>);
    }
}

export default ShoppingCart;
    
