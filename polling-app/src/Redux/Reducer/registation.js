import * as constant from "../constant";

let initialState = {
  isRegistion: false,
  isLoading: false
};

const Registation = (state = initialState, action) => {
  switch (action.type) {
    case constant.Registation_Request:
      return {
        ...state,
        isRegistion: false,
        isLoading: true
      };
    case constant.Registation_Error:
      return {
        ...state,
        isRegistion: false,
        isLoading: false,
        error: action.payload.error
      };
    case constant.Registation_Success:
      return {
        ...state,
        isRegistion: true,
        isLoading: false,
        response: action.payload.response
      };
    default:
      return {
        ...state
      };
  }
};
export default Registation;
