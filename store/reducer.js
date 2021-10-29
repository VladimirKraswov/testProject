import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  isPending: false,
  data: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_IS_PENDING: {
      return {
        ...state,
        isPending: action.payload,
      };
    }
    case actionTypes.SET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}
