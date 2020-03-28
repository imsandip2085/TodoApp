
import * as constant from '../../constant'
let initialState = {
  isLoading: false
};

const GetVote = (state = initialState, action) => {
  switch (action.type) {
    case constant.GetVote_Request:
      return {
        ...state,
        isLoading: true
      };
    case constant.GetVote_Error:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case constant.GetVote_Success:
      return {
        ...state,
        isLoading: false,
        response: action.payload.response
      };
    default:
      return {
        ...state
      };
  }
};
export default GetVote;
