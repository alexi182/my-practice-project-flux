import { EventEmitter } from 'events';
import { autobind } from 'core-decorators';
import dispatcher from '../dispatcher';
import * as consts from '../constants/data';
const searchData = require('../data2.json');

@autobind()

class DataStore extends EventEmitter {
   constructor() {
      super();
      this.people = searchData
   }

   search(e) {
      let val = e.target.value.toLowerCase();
      let people2;

      if (val.length > 0) {
         people2 = searchData.filter((p) =>
         p.name.toLowerCase().indexOf(val) !== -1 ||
         p.surname.toLowerCase().indexOf(val) !== -1 ||
         p.age.toString().toLowerCase().indexOf(val) !== -1 )
      } else {
         people2 = searchData;
      }

      this.people = people2;
      this.emit(consts.CHANGE);
   }

   get People() { //метод для получения обновлённый(актуальных) значений из хранилища
      return this.people.slice(0);
   }

   handleAction(action) {
      switch(action.type) {
         case consts.SEARCH:
            this.search(action.payload); break;
      }
   }
}

const store = new DataStore();

dispatcher.register(store.handleAction); // Диспатчер вызывает все наши хранилища, обращается ко все ним, мы зарегистрировали функцию, которую диспетчер должен вызывать

export default store;