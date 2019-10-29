import { combineReducers } from "redux";

import games from "./games";
import server from "./server";

export default combineReducers({
  games,
  server
})
