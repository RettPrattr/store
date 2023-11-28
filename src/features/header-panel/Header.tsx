import React from 'react'
import { GiAbstract024 } from "react-icons/gi";
import { Basket } from './panel-items/Basket';
import { Notify } from './panel-items/Notify';
import { UserProfile } from './panel-items/UserProfile';
import { SearchTerm } from '../searchTerm/searchTerm';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


export const Header = (props: any) => {
  const value = useAppSelector(state => state.searchTermReducer)
  const dispatch = useAppDispatch()
  console.log(value)
  return (
    <nav className="h-[70px] flex justify-between px-5 items-center text-black">
        <span className="font-bold text-4xl text-clr-main text-primary"><GiAbstract024 /></span>
        
        <SearchTerm 
          searchTerm={value}
          dispatch={dispatch}
        />

        <div className='flex'>
          <Basket />
          <Notify />
          <UserProfile />
        </div>
    </nav>
  )
}


