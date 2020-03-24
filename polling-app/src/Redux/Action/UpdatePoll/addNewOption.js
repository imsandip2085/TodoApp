import { AddNewOptionRequest, AddNewOptionError, AddNewOptionSuccess } from "../index";
import apiRequest from "../../../service/apicall";
import { addPollAction } from "../../Action/Poll/getPollAction"

export function addNewOptionForm(id, newOption) {
  return async function (dispatch, getState) {
    try {
      let error;
      dispatch(AddNewOptionRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${newOption}`,
        "post",
        {},
        {}
      ).then(res => dispatch(addPollAction()));
     
      if (!data.error) {
        dispatch(AddNewOptionSuccess({ response: data }));
      } else {
        dispatch(AddNewOptionError({ error: data }));
      }
    } catch (error) {
      dispatch(AddNewOptionError({ error: error }));
    }
  };
}
