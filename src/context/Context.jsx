import React, { useContext, useState } from 'react';

const Address = React.createContext();
const Cart = React.createContext();

export const useAddress = () => {
    return useContext(Address);
}

export const useCart = () => {
    return useContext(Cart);
}

export default function Context({ children }) {
    const [address, setaddress] = useState({});
    const [carts, setcarts] = useState([]);
    return (
        <Address.Provider value={{ address, setaddress }}>
            <Cart.Provider value={{ carts, setcarts }}>
                {children}
            </Cart.Provider>
        </Address.Provider>
    )
}
