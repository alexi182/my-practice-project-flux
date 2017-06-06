import * as consts from '../constants/data';
import disp from '../dispatcher';

function search(val) {
   let action = {
      type: consts.SEARCH,
      payload: val
   };

   disp.dispatch(action)
}

export { search };

