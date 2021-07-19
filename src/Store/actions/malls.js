import {FETCH_STATUS,FETCH_MALLS,FETCH_FLOORS,FETCH_UNITS} from "./types";
import { instance } from "./instance";
import { handleError } from "./errors";

export const fetchStatus = () => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-status/`);
    dispatch({
      type: FETCH_STATUS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  };
};

export const fetchMalls = () => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-malls/`);
    dispatch({
      type: FETCH_MALLS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  };
};

export const fetchFloors = () => async (dispatch) => {
    try {
      const res = await instance.get(`malls/fetch-floors/`);
      dispatch({
        type: FETCH_FLOORS,
        payload: res.data,
      });
    } catch (error) {
      dispatch(handleError(error));
    };
};
  
export const fetchUnits = () => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-units/`);
    dispatch({
      type: FETCH_UNITS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  };
};

