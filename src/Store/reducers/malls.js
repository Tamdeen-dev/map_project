import { SELECTED_MALL,
         SELECTED_FLOOR,
         FETCH_CODING,
         FETCH_STATUS,
         FETCH_MALLS,
         FETCH_FLOORS,
         FETCH_UNITS,
         RETRIEVE_CONTRACT,
         FETCH_DECISION_HISTORY,
         FETCH_DECISION_TYPES,} from "../actions/types";
  
const initialState = {
    selected_mall_details:[],
    selected_floor_details:[],
    coding_details:[],
    status_details:[],
    malls_details:[],
    floors_details:[],
    units_details:[],
    contract_details:[],
    decision_history_details:[],
    decision_types_details:[],
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECTED_MALL:
            return {
                ...state,
                selected_mall_details: action.payload,
            };

        case SELECTED_FLOOR:
            return {
                ...state,
                selected_floor_details: action.payload,
                };

        case FETCH_CODING:
            return {
                ...state,
                coding_details: action.payload,
            };

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

        case RETRIEVE_CONTRACT:
            return {
                ...state,
                contract_details: action.payload,
            };

        case FETCH_DECISION_HISTORY:
            return {
                ...state,
                decision_history_details: action.payload,
            };

        case FETCH_DECISION_TYPES:
            return {
                ...state,
                decision_types_details: action.payload,
            };

        default:
            return state;
       
    }
};
export default reducer;  