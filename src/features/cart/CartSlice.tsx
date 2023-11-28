import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IProductFromRapid } from "../../models/models";


const FAV_KEY = 'fk'

interface cartState {
  cartItems: IProductFromRapid[],
  cartTotalQuantity: number,
  cartTotalAmount: number

}





const initialState: cartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  //   addFavourite(state, action: PayloadAction<any>) {
  //     state.cartItems.push(action.payload)
  //     console.log("Added!")
  //     localStorage.setItem(FAV_KEY, JSON.stringify(state.cartItems));


  //     const existingIndex = state.cartItems.findIndex(
  //       (item) => item.webID === action.payload.webID
  //     );

  //     if (existingIndex >= 0) {
  //       state.cartItems[existingIndex] = {
  //         ...state.cartItems[existingIndex],
  //         cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
  //       };
  //     } else {
  //       let tempProductItem = { ...action.payload, cartQuantity: 1 };
  //       state.cartItems.push(tempProductItem);

  //     }
      
  // }, 
    removeFavourite(state, action: PayloadAction<any>) {
      state.cartItems.map((cartItem) => {
      if (cartItem.webID === action.payload.webID) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.webID !== cartItem.webID
        );

        state.cartItems = nextCartItems;


      }
      localStorage.setItem(FAV_KEY, JSON.stringify(state.cartItems));
      return state;
    });
  },
  // decreaseCart(state, action) {
  //   const itemIndex = state.cartItems.findIndex(
  //     (item) => item.webID === action.payload.webID
  //   );

  //   if (state.cartItems[itemIndex].quantity > 1) {
  //     state.cartItems[itemIndex].quantity -= 1;


  //   } else if (state.cartItems[itemIndex].cartQuantity === 1) {
  //     const nextCartItems = state.cartItems.filter(
  //       (item) => item.webID !== action.payload.webID
  //     );

  //     state.cartItems = nextCartItems;

  //   }

  //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  // },
}
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer