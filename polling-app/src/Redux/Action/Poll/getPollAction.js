import { GetPollRequest, GetPollSuccess, GetPollError } from "../index";
import apiRequest from "../../../service/apicall";


export function getPollAction() {
  return async function(dispatch) {     
    try {
        let error;
      dispatch(GetPollRequest({ isLoading: true })); 
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/list_polls`,
        "get",
        {},
        {}
      );
      console.log(data,"actionnnnnnn");
      
      if (data) {
        dispatch(GetPollSuccess({  response: data }));
      } else {
        dispatch(GetPollError({ response: error }));
      }
    } catch (error) {
      dispatch(GetPollError({  error: error }));
    }
  };
}
