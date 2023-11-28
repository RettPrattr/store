import React, {useState} from 'react'
import { AiFillHome } from "react-icons/ai";

export const Home = () => {
  const [fulness, setFulness] = useState('')


  return (
    <div>
      <AiFillHome 
        className='text-2xl text-clr-main mr-6 cursor-pointer text-primary'
        // onClick={}
      />
    </div>
  )
}