import { DeleteOptionRequest, DeleteOptionError, DeleteOptionSuccess } from "../index";
import apiRequest from "../../../service/apicall";
import { addPollAction } from "../../Action/Poll/getPollAction"

export function deleteOptionForm(id, text) {
    return async function (dispatch, getState) {
        try {
            let error;
            dispatch(DeleteOptionRequest({ isLoading: true }));
            let data = await apiRequest(
                `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${id}&option_text=${text}`,
                "post",
                {},
                {}
            ).then(res => dispatch(addPollAction()));
            if (!data.error) {
                dispatch(DeleteOptionSuccess({ response: data }));
            } else {
                dispatch(DeleteOptionError({ error: data }));
            }
        } catch (error) {
            dispatch(DeleteOptionError({ error: error }));
        }
    };
}
