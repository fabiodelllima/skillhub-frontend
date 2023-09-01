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

      navigate('/user');
      setTechList([...techList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTechs = async () => {
      try {
        const token = localStorage.getItem('@TOKEN');

        const { data } = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    getTechs();
  }, []);

  const updateTech = async (formData) => {
    try {
      const token = localStorage.getItem('@TOKEN');

      const { data } = await api.put(
        `/users/techs/${editTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newTechList = techList.map((tech) => {
        if (tech.id === editTech.id) {
          return data;
        } else {
          return tech;
        }
      });

      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
    setEditTech(null);
  };

  const deleteTech = async (deletingId) => {
    try {
      const token = localStorage.getItem('@TOKEN');

      await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
        updateTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
