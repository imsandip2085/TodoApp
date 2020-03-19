import { AddNewPollError, AddNewPollRequest, AddNewPollSuccess } from "./index";
import apiRequest from "../../service/apicall";

export function AddNewPollForm(title, option) {
  return async function(dispatch) {
    try {
      let error;
      dispatch(AddNewPollRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${option}____opt2____opt3____opt4`,
        "get",
        {},
        {}
      );
      console.log(data);
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
