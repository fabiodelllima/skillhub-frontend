import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';

export const HomePage = () => {
	return (
		<>
			<Header buttonText='Sair' />
			<main>
				<Dashboard userName='Fábio de Lima' />
			</main>
		</>
	);
};
