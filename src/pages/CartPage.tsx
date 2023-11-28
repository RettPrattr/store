import { IProductFromRapid } from '../models/models'
import { useActions } from '../app/actions'
import { useAppSelector } from '../app/hooks';
import { useSelector } from 'react-redux';
import { ProductToCart } from '../components/CartItem';



export const CartPage = () => {
    const cart = useAppSelector(state => state.cartReducer)
    console.log(cart, cart.cartItems, typeof cart.cartItems)

    if (cart.cartItems.length === 0) return <p className='text-center'>No added products.</p>
    return (
        <div>
            <ProductToCart />
        </div>
    )
}