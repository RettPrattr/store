import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { GiAbstract024 } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useActions } from '../app/actions';
import { productsApi, useLazyFetchAllProductsQuery } from '../app/api';
import { useDebounce } from '../hooks/debounce';
import { useFetchAllProductsQuery } from '../app/api';
import { Basket } from "../features/header-panel/panel-items/Basket";
import { Notify } from "../features/header-panel/panel-items/Notify";
import { UserProfile } from "../features/header-panel/panel-items/UserProfile";
import { useState, useCallback, useMemo } from "react";
// import { ProductToCart } from "../components/CartItem";
import { IProductFromRapid } from "../models/models";
import { useRef } from 'react';
import { debounce } from "lodash";



// interface productProps {
//     product: IProductFromRapid,
//     addFav: (product: IProductFromRapid),
//     removeFav: (product: IProductFromRapid)
// }

export const HomePage = () => {
    const value = useAppSelector(state => state.searchTermReducer)
    const dispatch = useAppDispatch()
    const debounced = useDebounce(value.value)
    const { data: products, isLoading, isError } = productsApi.useFetchAllProductsQuery(debounced, { refetchOnFocus: false })
    const { setSearchTerm, clearSearchTerm, addFavourite, removeFavourite } = useActions();
    // const {favourites} = useAppSelector(state => state.cartReducer)
    const [dropdown, setDropdown] = useState(false)
    let btnRef = useRef();
    // let arrFav = [];
    // products?.map(product => {
    //     arrFav.push(product.webID)
    // })
    // const [isFav, setIsFav] = useState(favourites.includes(arrFav.includes(webId)))

    // const [isFav, setIsFav] = useState(favourites.includes(products?.filter(product) => ))
    // const [fetchProducts, {isLoading: areProductsLoading, data: products}] = useLazyFetchAllProductsQuery()
    // const { isLoading, isError, data } = useFetchAllProductsQuery()

    const onSearchTermChangeHandler = (e: any) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm(''));
    };


    // const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     // event.preventDefault()
    //     addFavourite(products.webID)
    //     // setIsFav(true)
    //   }

    console.log(products)

    const onClick = () => console.log("onClick");
    const onClick2 = debounce(onClick, 300)


    const handleAddToCart = (product: IProductFromRapid) => {
        // if(btnRef.current){
        //     btnRef.current.setAttribute("disabled", "disabled");
        //   }
        addFavourite(product)
    }

    const addClick2 = debounce(handleAddToCart, 300);
    // const addClick3 = useCallback(addClick2, [])

    return (
        // <Controller>
        // <Scene duration={200} indicators={false} triggerHook="0.1">
        <div className="sm:mx-8 mx-0">
            {isError && <p className='text-center text-red-600'>Something went wrong...</p>}
            <div className="h-[70px] flex justify-between px-5 items-center text-black">
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
            </div>
            {dropdown && <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
                {products?.map((product => (
                    <li
                        key={product.webID}
                        className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer overflow-hidden'
                    >
                        {product.productTitle}
                    </li>
                )))}
            </ul>}
            {/* {
                            (progress)=>(
                            )
                        } */}
            {/* <Timeline totalProgress={progress} paused>     */}
            <div className='font-poppins flex flex-row flex-wrap justify-between rounded py-2 px-4 mb-2'>
                {isLoading && <p className='text-center'>Loading...</p>}
                {products?.map((product, index) => (
                    <div key={product.webID} className={`border-[1.5px] w-[240px] h-fit overflow-hidden items-start rounded flex justify-center flex-col py-4 px-3 mb-2 ${index === products.length - 1 ? 'mr-0' : 'mr-2'} trigger-els`}>
                        <img className="w-[100%]  items-start bg-cover" src={product.image.url} alt={product.productTitle} />
                        <h2 className="mt-3 truncate w-[95%]">{product.productTitle}</h2>
                        {/* {product.prices?[0].map((price) => {
                            <p>{price.regularPrice.minPrice}</p>
                        })} */}
                        <button className='w-[50%] rounded mt-3 text-white bg-primary py-1.5 px-0.75'
                            onClick={() => addClick2(product)}
                        >Add to cart</button>
                        {/* {!isFav && <button className='py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all'
                            onClick={addToFavourite}
                            >Add
                            </button>} */}
                        {/* <h1 className='font-bold'>{product.prices.regularPrice.minPrice.toString()}</h1> */}
                        {/* { products?.map(product => <ProductToCart id={product.webID} product={product}/>)} */}
                    </div>
                ))}

            </div>

        </div>


    )
}