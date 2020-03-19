import { combineReducers } from "redux";
import Login from "./login";
import Registation from "./registation";
import AddPoll from './polling/getPoll';
import UpdatePoll from './polling/updatePoll';
import AddNewPoll from './addNewPoll';


const rootReducer = combineReducers({
  LoginStatus: Login,
  RegistationStatus: Registation,
  AddPollStatus : AddPoll,
  UpdatePollStatus :  UpdatePoll,
  AddNewPollStatus : AddNewPoll
  
});

export default rootReducer;
