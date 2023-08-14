import './styles/index.scss';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';

const App = () => {
	return (
		<>
			<LoginPage />
			<RegisterPage />
			<HomePage />
		</>
	);
};

export default App;
