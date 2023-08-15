import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ErrorPage } from '../pages/ErrorPage';

export const RoutesMain = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
};
