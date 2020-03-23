import { DeletePollRequest, DeletePollError, DeletePollSuccess } from "../index";
import apiRequest from "../../../service/apicall";

export function deletePollForm(id) {
    return async function (dispatch, getState) {
        try {
            let error;
            dispatch(DeletePollRequest({ isLoading: true }));
            let data = await apiRequest(
                `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`,
                "post",
                {},
                {}
            ).then(res => { });
            if (!data.error) {
                dispatch(DeletePollSuccess({ response: data }));
            } else {
                dispatch(DeletePollError({ error: data }));
            }
        } catch (error) {
            dispatch(DeletePollError({ error: error }));
        }
    };
}
