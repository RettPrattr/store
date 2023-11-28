import { createContext, ReactNode, useContext, useState } from "react"
import { IProductFromRapid } from "../models/models"
import { useAppSelector } from '../app/hooks';

// type ShoppingCartProviderProps = {
//     children: ReactNode
//   }


// type ShoppingCartContext = {
//     openCart: () => void
//     closeCart: () => void
//     getItemQuantity: (id: string) => string
//     increaseCartQuantity: (id: string) => void
//     decreaseCartQuantity: (id: string) => void
//     removeFromCart: (id: number) => void
//     cartQuantity: number
//     cartItems: IProductFromRapid[];
//   }   

// const ShoppingCartContext = createContext({} as ShoppingCartContext)

// export function useShoppingCart() {
//     return useContext(ShoppingCartContext)
//   }


//   export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
//     const [isOpen, setIsOpen] = useState(false)
//     const {cartItems, cartTotalAmount, cartTotalQuantity} = useAppSelector(state => state.cartReducer)
//     // const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
//     //   "shopping-cart",
//     //   []
//     // )
  
//     // const cartQuantity = cartItems.reduce(
//     //   (quantity, item) => item. + quantity,
//     //   0
//     // )
  
//     const openCart = () => setIsOpen(true)
//     const closeCart = () => setIsOpen(false)

//     // function getItemQuantity(id: number) {
//     //     return cartItems.find(item => item.webID === id)?.quantity || 0
//     //   }
  
//     return (
//       <ShoppingCartContext.Provider
//         value={{
//           getItemQuantity,
//           openCart,
//           closeCart,
//           cartItems,
//           cartQuantity,
//         }}
//       >
//         {children}
//         <ShoppingCart isOpen={isOpen} />
//       </ShoppingCartContext.Provider>
//     )
//   }
  
