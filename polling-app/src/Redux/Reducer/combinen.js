import { combineReducers } from "redux";
import Login from "./login";
import Registation from "./registation";

const rootReducer = combineReducers({
  LoginStatus: Login,
  RegistationStatus: Registation
});

export default rootReducer;
