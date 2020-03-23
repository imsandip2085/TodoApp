
import * as constant from '../../constant';

let initialState = {
    isLoading: false
};

const DeleteOption = (state = initialState, action) => {
    switch (action.type) {
        case constant.DeleteOption_Request:
            return {
                ...state,
                isLoading: true
            };
        case constant.DeleteOption_Error:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        case constant.DeleteOption_Success:
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
export default DeleteOption;
