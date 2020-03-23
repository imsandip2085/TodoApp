
import * as constant from '../../constant';

let initialState = {
    isLoading: false
};

const DeletePoll = (state = initialState, action) => {
    switch (action.type) {
        case constant.DeletePoll_Request:
            return {
                ...state,
                isLoading: true
            };
        case constant.DeletePoll_Error:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        case constant.DeletePoll_Success:
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
export default DeletePoll;
