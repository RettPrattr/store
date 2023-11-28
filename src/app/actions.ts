import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import { searchTermActions } from "../features/searchTerm/searchTermSlice";
import { cartActions } from "../features/cart/CartSlice";

const actions = {
    ...searchTermActions,
    ...cartActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}