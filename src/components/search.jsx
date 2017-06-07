import {autobind} from 'core-decorators';
import { CHANGE } from '../constants/data';
import * as actions from '../actions/data';
import store from  '../stores/data';
const searchData = require('../data2.json');

@autobind()
export default class Search extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         people: searchData
      }
   }

   update() {
      this.setState({
         people: store.People
      })
   }

   componentWillMount() {
      store.addListener(CHANGE, this.update);
   }

   componentWillUnmount() {
      store.removeListener(CHANGE, this.update);
   }

   render() {
      return (
          <div>
             <h2>Поиск</h2>
             <input type="text" className="form-control" onChange={actions.search} />

             <table className="table">
                <thead>
                <tr className="row">
                   <th>Имя</th>
                   <th>Фамилия</th>
                   <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {
                   this.state.people.map((searchItem, index) =>
                       <tr className="row" key={index}>
                          <td>{searchItem.name}</td>
                          <td>{searchItem.surname}</td>
                          <td>{searchItem.age}</td>
                       </tr>
                   )}
                </tbody>
             </table>
          </div>
      )};
}