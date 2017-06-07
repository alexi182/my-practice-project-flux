import * as consts from '../constants/service';
import disp from '../dispatcher';

function select(name) {
   let action = {
      type: consts.SELECT,
      payload: name
   };

   disp.dispatch(action)
}

function total(services) {
   let action = {
      type: consts.TOTAL,
      payload: services
   };

   disp.dispatch(action)
}

export { select, total };

