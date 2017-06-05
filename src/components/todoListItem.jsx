import {autobind} from 'core-decorators';

@autobind()
export default class TodoListItem extends React.Component {
   constructor(props) {
      super(props);
   }

   complete() {
      this.props.complete(this.props.id);
   }

   remove(){
      this.props.remove(this.props.id);
   }

   render() {

      let completed = this.props.completed ? ' completed' : '';

      return (
          <div className="todo-block__list-item">
             <input className="col-md-1" type="checkbox" checked={this.props.completed} onChange={this.complete} />

             <p className={`col-md-9${completed}`}>{this.props.text}</p>
             <button className="col-md-2" onClick={this.remove}>Del</button>
          </div>
      )
   }

}