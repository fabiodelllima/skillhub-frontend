import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { toast } from 'react-toastify';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const { techList, setTechList } = useContext(UserContext);
  const [editTech, setEditTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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
      if (
        error.response.data.message ===
        'User Already have this technology created you can only update it'
      ) {
        toast.error('Tecnologia já cadastrada');
      } else {
        toast.error('Houve um erro');
      }
      console.log(error);
    }
    setIsVisible(false);
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
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
