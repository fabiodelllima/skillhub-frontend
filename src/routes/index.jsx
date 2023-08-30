import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { UserPage } from '../pages/UserPage';
import { ErrorPage } from '../pages/ErrorPage';
import { PrivateRoutes } from './PrivateRoutes';

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />

			<Route element={<PrivateRoutes />}>
				<Route path='/user' element={<UserPage />} />
			</Route>

			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};
