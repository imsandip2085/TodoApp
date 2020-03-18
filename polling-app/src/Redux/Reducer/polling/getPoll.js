import * as constant from "../../constant";


const initialState = {
  isFetched: false,
  isError: false,
  isLoading: false,
  response : []
};

export default function GetPoll(state = initialState, action) {    
  switch (action.type) {
    case constant.GetPoll_Request:
      return { ...state, isLoading: true };
    case constant.GetPoll_Success:
      return { ...state, isLoading: false, isFetched: true, response: action.payload.response.data };
    case constant.GetPoll_Error:
      return { ...state, isError: true, isLoading:false, error: action.payload.error };
    default:
      return state;
  }
}
