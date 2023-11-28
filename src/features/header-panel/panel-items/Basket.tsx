import React, {useState} from 'react'
import { BsFillBasket3Fill } from "react-icons/bs";

export const Basket = () => {
  const [fulness, setFulness] = useState('')


  return (
    <div>
      <BsFillBasket3Fill 
        className='text-2xl text-clr-main mr-6 cursor-pointer text-primary'
        // onClick={}
      />
      <span></span>
    </div>
  )
}