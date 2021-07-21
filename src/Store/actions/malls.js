import {FETCH_STATUS,FETCH_MALLS,FETCH_FLOORS,FETCH_UNITS} from "./types";
import {UnitsValidator,} from "./validators";
import { instance } from "./instance";
import { handleError, resetErrors } from "./errors";

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

export const uploadUnit = (
  inputData,
  setUnitName,
  setUnitType,
  setUnitsize,
  setUnitshape,
  setUnitTrackable,
  setUnitClassification,
  setAddElement,
  setLoading,
  setMessageOpen,
 
) => async (dispatch) => {
  try {
    await UnitsValidator(inputData);
    await setLoading(true);

    await instance.post((`malls/create-units/`), inputData);


    dispatch(resetErrors());

    setUnitName("");
    setUnitType("");
    setUnitsize("");
    setUnitshape("");
    setUnitTrackable("Yes");
    setUnitClassification("");
    setAddElement([]);
    setLoading(false);
    setMessageOpen(true);
  } 
  catch (error) {
    setLoading(false);
    dispatch(handleError(error));
  }
};