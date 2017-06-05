import * as consts from '../constants/notes';
import disp from '../dispatcher';

function add(val) {
   let action = {
      type: consts.ADD,
      payload: val
   };

   disp.dispatch(action)
}

function remove(id) {
   let action = {
      type: consts.REMOVE,
      payload: id
   };

   disp.dispatch(action)
}

function complete(id) {
   let action = {
      type: consts.COMPLETE,
      payload: id
   };

   disp.dispatch(action)
}

export { add, remove, complete };

