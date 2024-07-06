import React, { useContext, useState } from 'react';

const Address = React.createContext();

export const useAddress = () => {
    return useContext(Address);
}

export default function Context({ children }) {
    const [address, setaddress] = useState({});
    return (
        <Address.Provider value={{ address, setaddress }}>
            {children}
        </Address.Provider>
    )
}
