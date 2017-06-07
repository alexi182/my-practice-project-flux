import ServiceItem from './serviceItem';
import {autobind} from 'core-decorators';
import { CHANGE } from '../constants/service';
import * as actions from '../actions/data';
import store from  '../stores/data';
const servicesData = require('../service.json');
let TestComp = (props) => {
   return (<div>
      {props.message}
   </div>)
};

@autobind()
export default class Service extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         services: servicesData,
         total: this.total(servicesData)
      }
   }

   getChildContext() {
      return {
         select: this.select
      }
   }

   static childContextTypes = {
      select: React.PropTypes.func
   }

   update() {
      this.setState({
         notes: store.Service
      });
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
             <TestComp message="Привет" />
             <h2>Услуги</h2>
             <table className="table service-table">
                <tbody>
                {
                   this.state.services.map((s, index) =>
                       <ServiceItem {...s} key={index} />
                   )}
                <tr className="row">
                   <td>Итого</td>
                   <td>{this.state.total} p.</td>
                </tr>
                </tbody>
             </table>
          </div>
      )};
}