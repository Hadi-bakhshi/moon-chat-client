import { createContext, useContext, useEffect, useReducer } from 'react';

import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user') as any) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextDispatcher = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
    >
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthContextDispatcher);
