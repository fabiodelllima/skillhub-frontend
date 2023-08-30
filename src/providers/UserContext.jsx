import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

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

	const userLogin = async (formData, setLoading, reset) => {
		try {
			setLoading(true);
			const { data } = await api.post('/sessions', formData);
			setUser(data.user);
			localStorage.setItem('@USERID', data.user.id);
			localStorage.setItem('@TOKEN', data.token);
			reset();
			navigate('/user');
		} catch (error) {
			if (![404, 500].includes(error.response.status)) {
				toast.error('O email ou a senha não correspondem');
			} else {
				toast.error('Servidor com problemas');
			}
		} finally {
			setLoading(false);
		}
	};

	const userLogout = () => {
		setUser(null);
		navigate('/');
		localStorage.removeItem('@USERID');
		localStorage.removeItem('@TOKEN');
		toast.warning('Deslogando...');
	};

	useEffect(() => {
		const userId = localStorage.getItem('@USERID');
		const token = localStorage.getItem('@TOKEN');

		const getUser = async () => {
			try {
				setLoading(true);
				const { data } = await api.get(`/profile`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setUser(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		if (userId && token) {
			getUser();
		}
	}, []);

	return (
		<UserContext.Provider
			value={{ loading, user, userLogout, userLogin, userRegister }}
		>
			{children}
		</UserContext.Provider>
	);
};
