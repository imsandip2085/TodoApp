import { createAction } from "redux-actions";
import * as constant from "../constant";

export const LoginRequest = createAction(constant.Login_Request);
export const LoginSuccess = createAction(constant.Login_Success);
export const LoginError = createAction(constant.Login_Error);

export const RegistationRequest = createAction(constant.Registation_Request);
export const RegistationSuccess = createAction(constant.Registation_Success);
export const RegistationError = createAction(constant.Registation_Error);

export const AddPollRequest = createAction(constant.AddPoll_Request);
export const AddPollSuccess = createAction(constant.AddPoll_Success);
export const AddPollError = createAction(constant.AddPoll_Error);

export const AddNewPollRequest = createAction(constant.AddNewPoll_Request);
export const AddNewPollSuccess = createAction(constant.AddNewPoll_Success);
export const AddNewPollError = createAction(constant.AddNewPoll_Error);

export const UpdateTitleRequest = createAction(constant.UpdateTitle_Request);
export const UpdateTitleSuccess = createAction(constant.UpdateTitle_Success);
export const UpdateTitleError = createAction(constant.UpdateTitle_Error);

export const AddNewOptionRequest = createAction(constant.AddNewOption_Request);
export const AddNewOptionSuccess = createAction(constant.AddNewOption_Success);
export const AddNewOptionError = createAction(constant.AddNewOption_Error);

export const DeleteOptionSuccess = createAction(constant.DeleteOption_Request);
export const DeleteOptionError = createAction(constant.DeleteOption_Success);
export const DeleteOptionRequest = createAction(constant.DeleteOption_Error);

export const DeletePollRequest = createAction(constant.DeletePoll_Request);
export const DeletePollSuccess = createAction(constant.DeletePoll_Success);
export const DeletePollError = createAction(constant.DeletePoll_Error);

export const GetVoteRequest = createAction(constant.GetVote_Request);
export const GetVoteSuccess = createAction(constant.GetVote_Success);
export const GetVoteError = createAction(constant.GetVote_Error);
