import { GetVoteRequest, GetVoteSuccess, GetVoteError } from "../index";
import apiRequest from "../../../service/apicall";

export function GetVote(id,text) {
  return async function (dispatch) {
    try {
        console.log(id,"figutihjtrhp"); 
        
      let error;
      dispatch(GetVoteRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${text}`,
        "post",
        {},
        {}
      );
      console.log(data,"figutihjtrhp"); 
      if (data) {
        dispatch(GetVoteSuccess({ response: data }));
      } else {
        dispatch(GetVoteError({ response: error }));
      }
    } catch (error) {
      dispatch(GetVoteError({ error: error }));
    }
  };
}
