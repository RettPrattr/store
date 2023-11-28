import React, { useState } from 'react'
import { IProductFromRapid } from '../models/models'
import { useActions } from '../app/actions'
import { useAppSelector } from '../app/hooks';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';


export const ProductToCart = () => {
  // const {addFavourite, removeFavourite} = useActions()
  const {cartItems, cartTotalAmount, cartTotalQuantity} = useAppSelector(state => state.cartReducer)
  const {removeFavourite} = useActions();

  // const cart = useSelector((state: RootState) => state)

  // const cartItemsArr = cart.cartItems;
  // console.log(cartItemsArr, typeof cartItemsArr)

  const handleRemoveFromCart = (product: IProductFromRapid) => {
    // if(btnRef.current){
    //     btnRef.current.setAttribute("disabled", "disabled");
    //   }
    removeFavourite(product)
}

  return (
    <div className='flex justify-center'>
      {cartItems.length === 0 ? (
        <div>
          <p className='text-center'>No items added</p>
          <Link className='text-2xl cursor-pointer text-primary' to="/">
             
          </Link>
        </div>
      ): (
        <div>
          <div>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
          </div>
          <div className='font-poppins items-center flex flex-row flex-wrap justify-between rounded py-2 px-4 mb-2'>
                            
                            {cartItems?.map(cartItem => (
                            <div key={cartItem.webID} className={`border-[1.5px] w-[240px] h-[480px] overflow-hidden rounded flex justify-center flex-col py-4 px-3 mb-2 mr-2' trigger-els`}>
                            <img className="w-[100%]  bg-cover" src={cartItem.image.url} alt={cartItem.productTitle} />
                            <h1 className="mt-3">{cartItem.productTitle}</h1>
                            <button className='w-[50%] rounded mt-3 text-white bg-orange-400 py-1.5 px-0.75'
                            onClick={() => handleRemoveFromCart(cartItem)} 
                            >Remove from cart</button>
                        </div>
                            ))}
                
                        </div>
        </div>
      )}
    </div>
  )
}

