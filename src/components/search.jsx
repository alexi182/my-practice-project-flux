import {autobind} from 'core-decorators';
const searchData = require('../data2.json');

@autobind()
export default class Search extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         people: searchData
      }
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

      this.setState({
         people: people2
      })
   }

   render() {
      return (
          <div>
             <h2>Поиск</h2>
             <input type="text" className="form-control" onChange={this.search} />

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