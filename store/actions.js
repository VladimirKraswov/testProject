import * as actionTypes from './actionTypes';
import {httpClient} from '../api/httpClient';

const MAX_ELEMENTS_COUNT = 25;

const setIsPending = isPending => ({
  type: actionTypes.SET_IS_PENDING,
  payload: isPending,
});

const setData = data => ({
  type: actionTypes.SET_DATA,
  payload: data,
});

export const loadData = () => async dispatch => {
  dispatch(setIsPending(true));
  try {
    const res = await httpClient();
    if (res) {
      dispatch(setData(res.slice(0, MAX_ELEMENTS_COUNT)));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setIsPending(false));
  }
};
