import React, { useState } from 'react';

import {Outlet} from 'react-router-dom';


import Nav from './Nav';
import ShoppingCart from './ShoppingCart';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Home() {
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
     {/* <ShoppingCart 
            products={products}
            productActions={
              {
               'addHandler':addHandler,
               'removeProduct':removeProduct,
               'decreaseHandler':decreaseHandler,
               'restHandler':restHandler
              }
    
            }
         /> */} 
    </>

  );
}
