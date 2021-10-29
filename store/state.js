import {loadData} from './actions';
import {getIsPending, getData} from './selectors';

export default {
  actions: {
    loadData,
  },
  selectors: {
    getIsPending,
    getData,
  },
};
