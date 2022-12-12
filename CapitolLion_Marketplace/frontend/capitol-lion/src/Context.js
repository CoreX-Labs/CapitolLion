import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
	const [ address, setAddress ] = useState({ address: 'Connect Wallet' });

	return <Context.Provider value={{ address, setAddress }}>{children}</Context.Provider>;
};
