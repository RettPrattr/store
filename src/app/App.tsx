import React from 'react';
import logo from './logo.svg';
import { Header } from '../features/header-panel/Header';
import { IProductFromRapid } from '../models/models';
import { useAppSelector, useAppDispatch } from './hooks';
import { Navigation } from '../components/Navigation';
import {Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

// interface stateModel {
//   searchTerm: string;
//   inventory: IProductFromRapid[]
// }

export function App(props: any) {
  const value = useAppSelector(state => state.searchTermReducer)
  const dispatch = useAppDispatch()
  // const { state, dispatch } = props;
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/favourites" element={ <CartPage />}/>
      </Routes>
    </>
  );
}
