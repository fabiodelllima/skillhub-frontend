/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Dashboard/Header';

export const UserPage = ({ user, userLogout }) => {
	return (
		<>
			<Header buttonText='Sair' userLogout={userLogout} />
			<main>
				<Dashboard user={user} />
			</main>
		</>
	);
};
