import { createContext, useState } from "react";

export const Crecontext = createContext();

const Provider = ({ children }) => {
  const [car, setCar] = useState([]);
  return (
    <Crecontext.Provider value={{ car, setCar }}>
      {children}
    </Crecontext.Provider>
  );
};
export default Provider;
