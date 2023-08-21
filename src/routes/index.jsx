import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { UserPage } from '../pages/UserPage';
import { ErrorPage } from '../pages/ErrorPage';

export const RoutesMain = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/user' element={<UserPage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
};
