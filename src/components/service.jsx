import ServiceItem from './serviceItem';
import {autobind} from 'core-decorators';
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

   select(name) {

      let servicesSelected = this.state.services.slice(0); // новый массив в памяти с теми же элементами - оптимизация
      let s = servicesSelected.find(srv => srv.name == name);

      if (!s) return;

      if (s.selected == true) {
         s.selected = false;
      } else {
         s.selected = true;
      }
      // s.selected = !s.selected;

      this.setState({
         services2: servicesSelected,
         total: this.total(servicesSelected)
      })
   }

   total(services2) {
      return services2.filter(s => s.selected).reduce((prev, current) => prev + current.price, 0);
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