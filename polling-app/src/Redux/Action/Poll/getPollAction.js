import { AddPollRequest, AddPollSuccess, AddPollError } from "../index";
import apiRequest from "../../../service/apicall";

export function addPollAction() {
  return async function (dispatch) {
    try {
      let error;
      dispatch(AddPollRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/list_polls`,
        "get",
        {},
        {}
      );
      if (data) {
        dispatch(AddPollSuccess({ response: data }));
      } else {
        dispatch(AddPollError({ response: error }));
      }
    } catch (error) {
      dispatch(AddPollError({ error: error }));
    }
  };
}
