import { SET_ERRORS } from "./types";

export const setErrors = (errors) => ({ 
    type: SET_ERRORS, 
    payload: errors });

export const resetErrors = () => setErrors({});

export const handleError = (error) => async (dispatch) => {
  if (error.response) {
    console.log(error.response.data);
    dispatch(setErrors(error.response.data));
  } else {
    console.error(error);
  }
};