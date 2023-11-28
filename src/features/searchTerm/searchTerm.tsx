import React, { useState } from 'react';
import { searchTermActions } from './searchTermSlice';
import { Dispatch } from 'react';
import { IActions } from '../../models/models';
import { useActions } from '../../app/actions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useDebounce } from '../../hooks/debounce';
import { useFetchAllProductsQuery } from '../../app/api'


interface setSearchActions {
  type: IActions['SET_SEARCH_PRODUCTS']
}

export const SearchTerm = (props: any) => {
    const value = useAppSelector(state => state.searchTermReducer)
    const dispatch = useAppDispatch()
    // const [value, setValue] = useState() 
    const debounced = useDebounce(value.value)
    const { setSearchTerm, clearSearchTerm} = useActions();
    // const { isLoading, isError, data } = useFetchAllProductsQuery()
    


    const onSearchTermChangeHandler = (e: any) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
      };
    
    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm(''));
      };



      // console.log(value.hasOwnProperty("value"), typeof value)
    return (
        <div className='w-[500px]'>
        <input 
          type="text"
          className='border py-2 px-4 w-full'
          placeholder="Search for necessary goods"
          value={value.value}
          onChange={onSearchTermChangeHandler}
          />
          {value.value.length > 0 && (
              <button
              onClick={onClearSearchTermHandler}
              type='button'
              id='search-clear-button'>
                CLEAR
              </button>

          )}
      </div>
    )
}
