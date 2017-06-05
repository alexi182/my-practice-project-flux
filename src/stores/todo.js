import { EventEmitter } from 'events';
import { autobind } from 'core-decorators';
import dispatcher from '../dispatcher';
import * as consts from '../constants/notes';

@autobind()
class TodoStore extends EventEmitter {  //хранилище
   constructor() {
      super();
      this.notes = [];
   }

   emitChanges(notes) {
      this.notes = notes;
      this.emit(consts.CHANGE);//вызов события , оповещение о наступлении события CHANGE
   }

   add(val) {
      let notes = this.notes.slice();
      notes.push({
         text: val,
         completed: false,
         id: this.notes.length + 1
      });

      this.emitChanges(notes);
   }

   remove(id) {
      let noteIndex = this.notes.findIndex((item) => item.id == id);
      if (noteIndex !== -1) {
         let notes = this.notes.slice();
         notes.splice(noteIndex, 1);

         this.emitChanges(notes);
      }
   }

   complete(id) {
      let notes = this.notes.slice();
      let note = notes.find((n) => n.id == id);
      if (note) {
         note.completed = !note.completed;

         this.emitChanges(notes);
      }
   }

   get Notes() { //метод для получения обновлённый(актуальных) значений из хранилища
      return this.notes.slice(0);
   }

   handleAction(action) {  //метод,вызываемый диспетчером когда приходит action
      switch(action.type) { //ПРОверяем может ли данный тип экшена быть обработан в данном случае
         case consts.ADD:
            this.add(action.payload); break;
         case consts.REMOVE:
            this.remove(action.payload); break;
         case consts.COMPLETE:
            this.complete(action.payload); break;
      }
   }
}

const store = new TodoStore();

dispatcher.register(store.handleAction); // Диспатчер вызывает все наши хранилища, обращается ко все ним, мы зарегистрировали функцию, которую диспетчер должен вызывать

export default store;