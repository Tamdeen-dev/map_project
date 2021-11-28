import {SELECTED_MALL,
        SELECTED_FLOOR,
        FETCH_CODING,
        FETCH_STATUS,
        FETCH_MALLS,
        FETCH_FLOORS,
        FETCH_UNITS,
        FETCH_USERS,
        FETCH_UNIT_MANAGERS,
        RETRIEVE_CONTRACT,
        FETCH_DECISION_HISTORY,
        FETCH_DECISION_TYPES,} from "./types";
import {UnitsValidator,decisionValidator} from "./validators";
import { instance } from "./instance";
import { handleError, resetErrors } from "./errors";


export const selectedMall = (mall) =>  async (dispatch) =>{
  dispatch({
    type: SELECTED_MALL,
    payload: mall,
  });
};

export const selectedFloor = (floor) =>  async (dispatch) =>{
  dispatch({
    type: SELECTED_FLOOR,
    payload: floor,
  });
};

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

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-users/`);
    dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  };
};

export const fetchUnitManagers = (unitid) => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-unit-account-manager/${unitid}/`);
    dispatch({
      type: FETCH_UNIT_MANAGERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  };
};



export const retrieveContract = (contractID) => async (dispatch) => {
  try {
    const res = await instance.get(`/malls/retrieve-contract/${contractID}`);
    dispatch({
      type: RETRIEVE_CONTRACT,
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


export const updateUnit = (
  inputData,
  setLoading,
  setMessageOpen,
  setAddElement,
) => async (dispatch) => {
  
  try {
   
    await setLoading(true);
    await instance.put((`malls/update-units/${inputData.id}/`), inputData);
    
    await dispatch(fetchUnits());
    dispatch(resetErrors());
    setAddElement([]);
    
    setLoading(false);
    setMessageOpen(true);

  } 
  catch (error) {
    setLoading(false);
    dispatch(handleError(error));
  }
 
};


export const fetchDecisionHistory = (contractID) => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-decision/${contractID}`);
    dispatch({
      type: FETCH_DECISION_HISTORY,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  }
};


export const fetchDecisionTypes = () => async (dispatch) => {
  try {
    const res = await instance.get(`malls/fetch-decision-types/`);
    dispatch({
      type: FETCH_DECISION_TYPES,
      payload: res.data,
    });
  } catch (error) {
    dispatch(handleError(error));
  }
};

export const uploadDecision = (
  inputData,
  setDecision,
  setComment,
  setLegal,
  setFinance,
  setfollowup,
  setLoading,
  setMessageOpen,

) => async (dispatch) => {
  try {
    await decisionValidator(inputData);
    await setLoading(true);

    await instance.post((`malls/create-decision/`), inputData);

    
    await setDecision(0);
    await setComment("");
    await setLegal(false);
    await setFinance(false);
    await setfollowup(true);
    await setMessageOpen(true);
    
    dispatch(resetErrors());
    setLoading(false);

  } catch (error) {
    setLoading(false);
    dispatch(handleError(error));
  }
};


export const uploadUnitAccountManager = (
  inputData,
  setLoading,
  setMessageOpen,
) => async () => {
  try {
    await setLoading(true);
    await instance.post((`malls/unit-account-manager/`), inputData);
    setLoading(false);
    setMessageOpen(true);
  } 
  catch (error) {
    setLoading(false);
  }
};
