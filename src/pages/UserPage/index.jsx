/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Dashboard/Header';

export const UserPage = () => {
	return (
		<>
			<Header buttonText='Sair' />
			<main>
				<Dashboard />
			</main>
		</>
	);
};
