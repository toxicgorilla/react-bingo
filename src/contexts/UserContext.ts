import React from 'react';
import { Game } from "../types";

export const UserContext = React.createContext<string>(localStorage.getItem('USER') || '');
export const UserProvider = UserContext.Provider;
export const useUser = () => React.useContext(UserContext);
