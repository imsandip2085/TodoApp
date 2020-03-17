import {createAction } from 'redux-actions';
import * as constant from '../constant';

export const LoginRequest = createAction(constant.Login_Request);
export const LoginSuccess = createAction(constant.Login_Success);
export const LoginError = createAction(constant.Login_Error);

export const RegistationRequest = createAction(constant.Registation_Request);
export const RegistationSuccess = createAction(constant.Registation_Success);
export const RegistationError = createAction(constant.Registation_Error);