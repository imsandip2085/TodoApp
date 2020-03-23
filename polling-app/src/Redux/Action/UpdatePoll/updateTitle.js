import {UpdateTitleSuccess , UpdateTitleRequest, UpdateTitleError } from "../index";
import apiRequest from "../../../service/apicall";

export function updateTitleForm(title, id) {
  return async function(dispatch, getState) {  
    try {
      // console.log(title,'Xcdvfbgnvm .');
     let error;
      dispatch(UpdateTitleRequest({ isLoading: true }));
      let data = await apiRequest(
        `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${title}`,
        "get",
        {},
        {}
      ); 
       console.log(data,"dfhgjkjkjhhcgfhvjb");
      
      if (!data.error) {
        dispatch(UpdateTitleSuccess({ response: data }));
      } else {
        dispatch(UpdateTitleError({error: data }));
      }
    } catch (error) {
      dispatch(UpdateTitleError({ error: error }));
    }
  };
}
