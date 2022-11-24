import { createContext, useContext,useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  
const [email,setEmail]=useState("a@b.c")
const [nick,setNickname]=useState("abc")

  return (
    <AppContext.Provider value={{email,setEmail,nick,setNickname}}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}