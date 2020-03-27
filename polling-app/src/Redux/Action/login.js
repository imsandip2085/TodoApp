import { LoginSuccess, LoginRequest, LoginError } from "./index";
import apiRequest from "../../service/apicall";
import { registationForm } from "./registation";
import jwt from 'jsonwebtoken';


export function loginForm(username, password) {
  return async function (dispatch, getState) {
    try {
      let error;
      dispatch(LoginRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`,
        "get",
        {},
        {}
      );
      if (data && data.token) {
        let user = await jwt.verify(data.token, 'jwt_tok')
        localStorage.setItem("token", data.token);
        dispatch(LoginSuccess({ login: true, response: { data, role: user.role } }));
      } else {
        dispatch(LoginError({ login: false, error: data }));
      }
    } catch (error) {
      dispatch(LoginError({ login: false, error: error }));
    }
  };
}
