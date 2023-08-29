/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { toast } from 'react-toastify';

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
			setUser(data.user);
			localStorage.setItem('@TOKEN', data.token);
			reset();
			navigate('/user');
		} catch (error) {
			if (error.response?.data.message === 'Incorrect password') {
				toast.error('O email e senha não correspondem');
			} else if (
				error.response?.data.message ===
				'Incorrect email / password combination'
			) {
				toast.error('O e-mail ou senha estão incorretos');
			}
		} finally {
			setLoading(false);
		}
	};

	const userRegister = async (formData, setLoading) => {
		try {
			setLoading(true);
			await api.post('/users', formData);
			toast.success('Cadastro realizado!');
		} catch (error) {
			if (error.response?.data.message === 'Email already exists') {
				toast.error('Usuário já cadastrado!');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<UserContext.Provider value={{ user, userLogout, userLogin, userRegister }}>
			{children}
		</UserContext.Provider>
	);
};
