import { EventEmitter } from 'events';
import { autobind } from 'core-decorators';
import dispatcher from '../dispatcher';
import * as consts from '../constants/service';
const servicesData = require('../service.json');

@autobind()

class serviveStore extends EventEmitter {
   constructor() {
      super();

      this.services = servicesData;
   }

   select(name) {

      let servicesSelected = this.state.services.slice(0); // новый массив в памяти с теми же элементами - оптимизация
      let s = servicesSelected.find(srv => srv.name == name);

      if (!s) return;
      s.selected = !s.selected;

      this.services = servicesSelected;
      this.total = this.total(servicesSelected);

   }

   total(services) {
      return services.filter(s => s.selected).reduce((prev, current) => prev + current.price, 0);
   }

   get Service() { //метод для получения обновлённый(актуальных) значений из хранилища
      return this.services.slice(0);
   }

   handleAction(action) {  //метод,вызываемый диспетчером когда приходит action
      switch(action.type) { //ПРОверяем может ли данный тип экшена быть обработан в данном случае
         case consts.SELECT:
            this.select(action.payload); break;
         case consts.TOTAL:
            this.total(action.payload); break;
      }
   }
}

const store = new serviveStore();

dispatcher.register(store.handleAction); // Диспатчер вызывает все наши хранилища, обращается ко все ним, мы зарегистрировали функцию, которую диспетчер должен вызывать

export default store;