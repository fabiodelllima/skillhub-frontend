/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const navigate = useNavigate();

	const userLogout = () => {
		setUser(null);
		navigate('/');
		localStorage.removeItem('@TOKEN');
	};

	const userLogin = async (formData, setLoading, reset) => {
		try {
			setLoading(true);
			const { data } = await api.post('/sessions', formData);
			console.table(data);
			setUser(data.user);
			localStorage.setItem('@TOKEN', data.token);
			reset();
			navigate('/user');
		} catch (error) {
			console.log(error);
			if (error.response?.message === 'Incorrect password') {
				alert('O email e senha não correspondem');
			}
		} finally {
			setLoading(false);
		}
	};

	const userRegister = async (formData, setLoading) => {
		try {
			setLoading(true);
			await api.post('/users', formData);
			alert('Cadastro realizado!');
		} catch (error) {
			console.log(error);
			if (error.response?.data.message === 'Email already exists') {
				alert('Usuário já cadastrado!');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<UserContext.UserProvider
			value={{ user, userLogout, userLogin, userRegister }}
		>
			{children}
		</UserContext.UserProvider>
	);
};
