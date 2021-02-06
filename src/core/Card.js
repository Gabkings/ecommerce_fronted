import React from 'react'
import { Redirect } from 'react-router-dom'
import { addItemToCart, removeItemFronCart } from './helper/cart_helper'

import ImageHelper from './helper/image_helper'




export const Card = ({
    product,
    addtoCart = true,
    removeFromCart = true,
    reload = undefined,
}) => {

  const isAuthenticated = true

  const addProductToCart = () =>{
    if(isAuthenticated){
      addItemToCart(product, ()=>{})
      console.log("Added to cart")
    }else{
      console.log("Please login")
    }
  }


  const getARedirect = redirect =>{
    if(redirect){
      return <Redirect to="/cart" />
    } 
  }

  const showAddToCartButton = addtoCart =>{
      return addtoCart && (
        <button
                onClick={addProductToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
      )
  }

  const removeFromCartButton = removeFromCart => {
    return removeFromCart && (
      <button
                onClick={() => { 
                  removeItemFronCart(product._id)
                  console.log("Removed from the cart")}}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
    )
  }

    return (
        <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{product.name}</div>
        <div className="card-body">
          <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
            {product.description}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {product.price}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCartButton(addtoCart)}
            </div>
            <div className="col-12">
              {removeFromCartButton(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    )
}
