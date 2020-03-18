import { createAction } from "redux-actions";
import * as constant from "../constant";

export const LoginRequest = createAction(constant.Login_Request);
export const LoginSuccess = createAction(constant.Login_Success);
export const LoginError = createAction(constant.Login_Error);

export const RegistationRequest = createAction(constant.Registation_Request);
export const RegistationSuccess = createAction(constant.Registation_Success);
export const RegistationError = createAction(constant.Registation_Error);

export const GetPollRequest = createAction(constant.GetPoll_Request);
export const GetPollSuccess = createAction(constant.GetPoll_Success);
export const GetPollError = createAction(constant.GetPoll_Error);

export const UpdatePollRequest = createAction(constant.UpdatePoll_Request);
export const UpdatePollSuccess = createAction(constant.UpdatePoll_Success);
export const UpdatePollError = createAction(constant.UpdatePoll_Error);

export const AddNewPollRequest = createAction(constant.AddNewPoll_Request);
export const AddNewPollSuccess = createAction(constant.AddNewPoll_Success);
export const AddNewPollError = createAction(constant.AddNewPoll_Error);
