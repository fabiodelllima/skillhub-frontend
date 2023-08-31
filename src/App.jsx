import './styles/index.scss';
import { RoutesMain } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from './providers/UserContext';
import { Loading } from './components/Loading';

const App = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer
        position='bottom-left'
        autoClose={2 * 1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
};

export default App;
