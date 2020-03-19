import * as constant from "../../constant";


const initialState = {
  isFetched: false,
  isError: false,
  isLoading: false,
  response : []
};

export default function AddPoll(state = initialState, action) {    
  switch (action.type) {
    case constant.AddPoll_Request:
      return { ...state, isLoading: true };
    case constant.AddPoll_Success:
      return { ...state, isLoading: false, isFetched: true, response: action.payload.response.data };
    case constant.AddPoll_Error:
      return { ...state, isError: true, isLoading:false, error: action.payload.error };
    default:
      return state;
  }
}
