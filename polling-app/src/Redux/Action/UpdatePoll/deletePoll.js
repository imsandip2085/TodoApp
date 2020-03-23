import { DeletePollRequest, DeletePollError, DeletePollSuccess } from "../index";
import apiRequest from "../../../service/apicall";
import { addPollAction } from "../../Action/Poll/getPollAction"

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
            ).then(res => dispatch(addPollAction()));
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
