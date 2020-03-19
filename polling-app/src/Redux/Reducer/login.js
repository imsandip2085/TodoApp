import * as constant from "../constant";

let initialState = {
  isLoading: false,
  isLogin: false
};
const Login = (state = initialState, action) => {
  switch (action.type) {
    case constant.Login_Request:
      return {
        ...state,
        isLoading: true,
        isLogin: false
      };
    case constant.Login_Success:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        response: action.payload.response
      };
    case constant.Login_Error:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        response: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
export default Login;
