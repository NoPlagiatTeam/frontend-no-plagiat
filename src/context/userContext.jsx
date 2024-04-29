import { createContext, useContext, useState } from "react";

// create context
const UserContext = createContext({
  user: {},
  setUser: () => {},
});

// context provider
const UserContextProvider = ({ children }) => {
  // state
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserContextProvider };
