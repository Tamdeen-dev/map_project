import {FETCH_CODING,FETCH_STATUS,FETCH_MALLS,FETCH_FLOORS,FETCH_UNITS} from "./types";
import {UnitsValidator,} from "./validators";
import { instance } from "./instance";
import { handleError, resetErrors } from "./errors";


export const fetchCoding = () => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-coding/`);
    dispatch({
      type: FETCH_CODING,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  };
};

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
  setUnitSize,
  setUnitShape,
  setUnitTrackable,
  setUnitClassification,
  setLoading,
  setMessageOpen,
  setAddElement,
) => async (dispatch) => {
  try {
    await UnitsValidator(inputData);
    await setLoading(true);

    await instance.post((`malls/create-units/`), inputData);
    
    await dispatch(fetchUnits());
    
    dispatch(resetErrors());
    setAddElement([]);
    
    setUnitName("");
    setUnitType("");
    setUnitSize("");
    setUnitShape("");
    setUnitTrackable(true);
    setUnitClassification("");
    setLoading(false);
    setMessageOpen(true);
  } 
  catch (error) {
    setLoading(false);
    dispatch(handleError(error));
  }
};