/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';

export const UserPage = ({ user, userLogout }) => {
	return (
		<>
			<Header buttonText='Sair' userLogout={userLogout} maxWidth='800px' />
			<main>
				<Dashboard user={user} />
			</main>
		</>
	);
};
