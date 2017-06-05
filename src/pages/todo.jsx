import TodoList from '../components/todoList';
import {autobind} from 'core-decorators';
import { CHANGE } from '../constants/notes';
import * as actions from '../actions/notes';
import store from  '../stores/todo';
const cities = require('../cities.json');

@autobind()
export default class TodoPage extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         notes: [],
         /*cities: cities*/
      };
   }

   getChildContext() {
      return {
         add: actions.add,
         complete: actions.complete,
         remove: actions.remove
      }
   }

   static childContextTypes = {
      add: React.PropTypes.func,
      complete: React.PropTypes.func,
      remove: React.PropTypes.func
   };

   update() {
      this.setState({
         notes: store.Notes
      });
   }

   componentWillMount() {
      store.addListener(CHANGE, this.update);
   }

   componentWillUnmount() {
      store.removeListener(CHANGE, this.update);
   }


  /* sort() {
      let allCities = this.state.cities.map((item) => item.city.toLowerCase());
      allCities.sort();

      this.setState({
         cities: allCities
      })
   }*/

   /*filter(action) {
    let notes = this.state.notes.filter(action);

    this.setState ({
    notes: notes
    })
    }*/

   render() {
     /* let cities = this.state.cities;*/

      return (
          <div className="todo-list">
             <h2>Заметки</h2>

             <TodoList notes={this.state.notes} />

          {/*   <div className="city-block">
                <table>
                   <thead>
                   <tr>
                      <th>Индекс</th>
                      <th onClick={this.sort}>Город</th>
                   </tr>
                   </thead>
                   <tbody>
                   {cities.map((item, index) =>
                       <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.city}</td>
                       </tr>
                   )}
                   </tbody>
                </table>
             </div>*/}
          </div>
      )};
}

