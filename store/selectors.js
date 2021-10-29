import {createSelector} from 'reselect';

const ownState = state => state;

export const getIsPending = createSelector(ownState, state => state.isPending);
export const getData = createSelector(ownState, state => state.data);
