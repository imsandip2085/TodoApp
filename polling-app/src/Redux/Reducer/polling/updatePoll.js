import * as constant from "../../constant";

const initialState = {
  isUpdate: false,
  isError: false,
  isLoading: false
};

export default function UpdatePoll(state = initialState, action) {
  switch (action.type) {
    case constant.AddPoll_Request:
      return { ...state, isLoading: true };
    case constant.AddPoll_Success:
      return {
        ...state,
        isLoading: false,
        isUpdate: true,
        response: action.payload.response
      };
    case constant.AddPoll_Error:
      return {
        ...state,
        isError: true,
        isLoading: false,
        isUpdate: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
