import { GetVoteRequest, GetVoteSuccess, GetVoteError } from "../index";
import apiRequest from "../../../service/apicall";
import { addPollAction } from "./getPollAction"


export function GetVote(id,text,userText) {
  return async function (dispatch) {
    try {
      
      let error;
      dispatch(GetVoteRequest({ isLoading: true }));
      let header = {
        'Content-Type': 'application/json',
        'access_token': `${userText}`, 
      };
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${text}`,
        "get",
        header,
        {}
      ).then(res => dispatch(addPollAction()));

      if (!data.error) {
        dispatch(GetVoteSuccess({ response: data }));
      } else {
        dispatch(GetVoteError({ response: error }));
      }
    } catch (error) {
      dispatch(GetVoteError({ error: error }));
    }
  };
}
