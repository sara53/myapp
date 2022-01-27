
import React , {Component}from 'react';
import { Container } from 'react-bootstrap';



class Product extends Component {
  
    render() { 
        let product = this.props.product;
        const {title,price,count} = product;
        return (
            <Container className="customContainer bg-light p-3 my-3 d-flex justify-content-around align-items-center" id="id1">
                <div>
                    <h2>{title}</h2>
                    <span className='text-danger'>{price}</span>
                </div>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-info' onClick={() => this.props.onAdd(product)}>+</button>
                    <span>{count}</span>
                    <button className='btn btn-info' onClick={()=> this.props.onDelete(product)}>-</button>
                    <button className='btn btn-danger' onClick={()=>this.props.onRemoveProduct(product)}>remove</button>
                </div>
            </Container>
        );
    }
}
 
export default Product;