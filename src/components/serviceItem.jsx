import {autobind} from 'core-decorators';

@autobind()
export default class ServiceItem extends React.Component {

   constructor(props, context) {
      super(props, context);
   }

   static contextTypes = {
      select: React.PropTypes.func
   };

   clicked() {
      /*this.props.select(this.props.name)*/
      this.context.select(this.props.name);
   }

   get active() {
      let c = '';

      if (this.props.selected == true) {
         c = 'active';
      }
      return c;
      // this.props.selected ? 'active' : ''
   }

   render() {
      return (
          <tr className={ `row ${this.active}` } onClick={this.clicked}>
             <td>{this.props.name}</td>
             <td>{this.props.price} p.</td>
          </tr>
      )};
}

