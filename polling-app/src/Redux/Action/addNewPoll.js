import { AddNewPollError, AddNewPollRequest, AddNewPollSuccess } from "./index";
import apiRequest from "../../service/apicall";

export function AddNewPollForm(title, options) {
  return async function (dispatch) {
    let options_string = "";
    options.map((opt, index) => {
      if (index == options.length - 1) {
        options_string += opt;
      }
      else {
        options_string += opt + '____';
      }
    })

    try {
      let error;
      dispatch(AddNewPollRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${options_string}`,
        "get",
        {},
        {}
      );
      if (!data.error) {
        dispatch(AddNewPollSuccess({ response: data }));
      } else {
        dispatch(AddNewPollError({ error: data }));
      }
    } catch (error) {
      dispatch(AddNewPollError({ error: error }));
    }
  };
}
