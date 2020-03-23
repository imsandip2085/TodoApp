
import * as constant from '../../constant';

let initialState = {
  isLoading: false
};

const UpdateTitle = (state = initialState, action) => {
  switch (action.type) {
    case constant.UpdateTitle_Request:
      return {
        ...state,
        isLoading: true
      };
    case constant.UpdateTitle_Error:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case constant.UpdateTitle_Success:
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
export default UpdateTitle;
