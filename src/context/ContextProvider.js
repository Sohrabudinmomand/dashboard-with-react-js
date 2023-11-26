import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setisCliked] = useState(initialState);

    // using this state to know the size of the screen device
    const [screenSize, setscreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setisCliked({ ...initialState, [clicked]: true });
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setisCliked,
                handleClick,
                screenSize,
                setscreenSize
            }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
