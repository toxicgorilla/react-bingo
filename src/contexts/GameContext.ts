import React from 'react';
import { Game } from "../types";

export const GameContext = React.createContext<Game>({} as Game);
export const GameProvider = GameContext.Provider;
export const useGame = () => React.useContext(GameContext);
