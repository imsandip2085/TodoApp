import { LoginSuccess, LoginRequest, LoginError } from "./index";
import apiRequest from "../../service/apicall";

export function loginForm(username, password) {
  return async function(dispatch, getState) {
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
        localStorage.setItem("token", data.token);
        dispatch(LoginSuccess({ login: true, response: data }));
      } else {
        dispatch(LoginError({ login: false, error: data }));
      }
    } catch (error) {
      dispatch(LoginError({ login: false, error: error }));
    }
  };
}
