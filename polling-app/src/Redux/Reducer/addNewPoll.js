import * as constant from '../constant';

let initialState = {
  isLoading: false
};

const AddNewPoll = (state = initialState, action) => {
  switch (action.type) {
    case constant.AddNewPoll_Request:
      return {
        ...state,
        isLoading: true
      };
    case constant.AddNewPoll_Error:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case constant.AddNewPoll_Success:
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
export default AddNewPoll;
