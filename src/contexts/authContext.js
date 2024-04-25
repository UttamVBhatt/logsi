import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthUser = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser, allUsers, setAllUsers }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
