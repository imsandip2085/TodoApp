import { combineReducers } from "redux";
import Login from "./login";
import Registation from "./registation";
import AddPoll from './polling/getPoll';
import AddNewPoll from './addNewPoll';
import UpdateTitle from './UpdatePoll/updateTitle';
import AddNewOption from './UpdatePoll/addNewOption';
import DeleteOption from './UpdatePoll/deleteOption';
import DeletePoll from './UpdatePoll/deletePoll';
import GetVote from './polling/getVote';

const rootReducer = combineReducers({
  LoginStatus: Login,
  RegistationStatus: Registation,
  AddPollStatus: AddPoll,
  UpdateTitleStatus: UpdateTitle,
  AddNewPollStatus: AddNewPoll,
  AddNewOptionStatus: AddNewOption,
  DeleteOptionStatus: DeleteOption,
  DeletePollStatus: DeletePoll,
  GetVoteStatus: GetVote
});

export default rootReducer;
