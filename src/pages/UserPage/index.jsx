import { Navbar } from '../../components/Dashboard/Navbar';
import { Header } from '../../components/Dashboard/Header';
import { TechSection } from '../../components/Dashboard/TechSection';

export const UserPage = () => {
	return (
		<>
			<Navbar buttonText='Sair' />
			<header>
				<Header />
			</header>
			<main>
				<TechSection />
			</main>
		</>
	);
};
