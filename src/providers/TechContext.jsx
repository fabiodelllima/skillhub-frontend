import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    const getTechs = async () => {
      try {
        const { data } = await api.post('/users/techs');
        console.table(data);
      } catch (error) {
        console.log(error);
      }
      getTechs();
    };
  }, []);

  return (
    <TechContext.Provider value={{ techList }}>{children}</TechContext.Provider>
  );
};
