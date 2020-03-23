
import * as constant from '../../constant';

let initialState = {
  isLoading: false
};

const AddNewOption = (state = initialState, action) => {
  switch (action.type) {
    case constant.AddNewOption_Request:
      return {
        ...state,
        isLoading: true
      };
    case constant.AddNewOption_Error:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case constant.AddNewOption_Success:
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
export default AddNewOption;
