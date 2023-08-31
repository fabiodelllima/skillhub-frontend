import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [techList, setTechList] = useState([]);

  const navigate = useNavigate();

  // READ
  useEffect(() => {
    const getTechs = async () => {
      try {
        const { data } = await api.get('');
        console.table(data);
      } catch (error) {
        console.log(error);
      }
      getTechs();
    };
  }, []);

  // CREATE
  const createTech = async (formData) => {
    try {
      const token = localStorage.getItem('@TOKEN');

      const newTech = {
        title: user.title,
        status: user.status,
        ...formData,
      };

      const { data } = await api.post('/users/techs', newTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.table(data);

      navigate('/user');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ techList, createTech }}>
      {children}
    </TechContext.Provider>
  );
};
