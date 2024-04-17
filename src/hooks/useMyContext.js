import { createContext, useContext } from "react";

export const myContext = createContext();

export const useMyContext = () => useContext(myContext);
