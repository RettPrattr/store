import React, {createContext, useContext, useState} from "react";

// const StateContext = createContext()

interface contextVarState {
    notification: boolean,
    cart: boolean,
    userProfile: boolean
}


const initialState: contextVarState = {
    notification: false,
    cart: false,
    userProfile: false
}



export const ContextProvider = () => {
    const [isClicked, setIsClicked] = useState(initialState);




    const handleClick = (clicked: any) => setIsClicked({...initialState, [clicked]: true})
}