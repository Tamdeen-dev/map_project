import {FETCH_STATUS,FETCH_MALLS,FETCH_FLOORS,FETCH_UNITS} from "../actions/types";
  
const initialState = {
    status_details:[],
    malls_details:[],
    floors_details:[],
    units_details:[],
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATUS:
            return {
                ...state,
                status_details: action.payload,
            };
        
        case FETCH_MALLS:
            return {
                ...state,
                malls_details: action.payload,
            };

        case FETCH_FLOORS:
            return {
                ...state,
                floors_details: action.payload,
            };

        case FETCH_UNITS:
            return {
                ...state,
                units_details: action.payload,
            };

        default:
            return state;
       
    }
};
export default reducer;  