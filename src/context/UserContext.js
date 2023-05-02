import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return <UserContext.Provider>{children}</UserContext.Provider>;
};
