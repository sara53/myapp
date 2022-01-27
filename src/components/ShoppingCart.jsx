import React, { Component } from 'react';
import Product from './Product';
import {Container,Navbar} from 'react-bootstrap';

export default class ShoppingCart extends Component {
  render() {

    // console.log(this.props);
    return (
        <>
            {this.props.products.map((product,index)=>{
                return (
                <Product product={product} key={index}
                    onAdd={this.props.productActions.addHandler}
                    onDelete={this.props.productActions.decreaseHandler}
                    onRemoveProduct={this.props.productActions.removeProduct}
                />
                )
            })}
            <Container>
                <button className='btn btn-warning' onClick={this.props.productActions.restHandler}>Rest All Product Counter</button>
            </Container>
           
          </>
    );
  }
}
