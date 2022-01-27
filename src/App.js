import React, { Component, useState } from 'react';
import Nav from './components/Nav';
import ShoppingCart from './components/ShoppingCart';

import {BrowserRouter as Router} from 'react-router-dom';


export default function App() {

 let [count,setCount] =  useState(0)
 let [products,setProducts] =  useState([
        {id:'1',title:'product 1',price:'20$',count:0},
        {id:'2',title:'product 2',price:'20$',count:0},
        {id:'3',title:'product 3',price:'20$',count:0},
        {id:'4',title:'product 4',price:'20$',count:0}
 ])


const addHandler = (product) =>{
    product.count +=1;
    let myProducts = [...products]
    setProducts(myProducts)
    setCount(count+1);
}

const decreaseHandler = (product) => {
 if(product.count!=0){
  product.count -=1;
  let myProducts = [...products]

  setProducts(myProducts)
  setCount(count-1);

  }
}

const removeProduct = (product) =>{

 let myProducts = products.filter((p)=>{
    return p.id !=product.id;
  })
  setProducts(myProducts)
}

const restHandler = () =>{
  let myProducts = [...products]

  let myProducts2= myProducts.map((product)=>{
    product.count = 0;
    return product;
  })

  setProducts(myProducts2)
  setCount(0)

}



  return (
    <>
     <Nav count={count}/>
         <ShoppingCart 
            products={products}
            productActions={
              {
               'addHandler':addHandler,
               'removeProduct':removeProduct,
               'decreaseHandler':decreaseHandler,
               'restHandler':restHandler
              }
    
            }
         />
    </>
  );
}

// export default class App extends Component {

//   state = { 
//     count:0,
//     products : [
//       {id:'1',title:'product 1',price:'20$',count:0},
//       {id:'2',title:'product 2',price:'20$',count:0},
//       {id:'3',title:'product 3',price:'20$',count:0},
//       {id:'4',title:'product 4',price:'20$',count:0},
//     ]
//   }

  

//   addHandler = (product) =>{
    
//     product.count +=1;
    

//     let products = [...this.state.products]

//     this.setState({
//      products,
//      count:this.state.count + 1

//     })
  
// }

// decreaseHandler = (product) => {
//  if(product.count!=0){
//   product.count -=1;
//   let products = [...this.state.products]

//   this.setState({
//    products,
//    count:this.state.count - 1
//   })
//  }

// }

// removeProduct = (product) =>{

//  let products =  this.state.products.filter((p)=>{
//     return p.id !=product.id;
//   })
//   this.setState({
//     products
//   })

// }

// restHandler = () =>{
//   let myProducts = [...this.state.products]

//   let   products= myProducts.map((product)=>{
//     product.count = 0;
//     return product;
//   })


//  this.setState({
//   products,
//   count:0
//  })
// }

//   render() {
//     return (
//       <Router>
//          <Nav count={this.state.count}/>
//          <ShoppingCart 
//             products={this.state.products}
//             productActions={
//               {
//                'addHandler': this.addHandler,
//                'removeProduct':this.removeProduct,
//                'decreaseHandler':this.decreaseHandler,
//                'restHandler':this.restHandler
//               }
    
//             }
//          />
         
//       </Router>
//   );
//   }
// }



