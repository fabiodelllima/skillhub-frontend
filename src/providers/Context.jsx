/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const Context = createContext({});

export const Provider = ({ children }) => {
	const [test, setTest] = useState([]);

	return (
		<Context.Provider value={{ test, setTest }}>{children}</Context.Provider>
	);
};
