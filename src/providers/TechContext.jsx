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
  const [editTech, setEditTech] = useState(null);
  const navigate = useNavigate();

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
      setTechList({ ...techList, newTech });
    } catch (error) {
      console.log(error);
    }
  };

  // READ
  useEffect(() => {
    const getTechs = async () => {
      try {
        const { data } = await api.get('/profile');
        console.table(data);
        setTechList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTechs();
  }, []);

  // UPDATE

  // DELETE
  const deleteTech = async (deletingId) => {
    try {
      await api.delete(`/users/techs/${deletingId}`);

      const newTechList = techList.filter(
        (tech) => tech.id !== deletingId
      );

      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        createTech,
        editTech,
        setEditTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
