import {autobind} from 'core-decorators';

const items = [
   {
      text: 'все',
      type: 'all'
   },
   {
      text: 'завершённые',
      type: 'completed'
   },
   {
      text: 'в работе',
      type: 'progress'
   },
   {
      text: 'удалённые',
      type: 'remove'
   },
];

@autobind()
export default class TodoListPanel extends React.Component {
   constructor(props) {
      super(props);

/*      this.items = [
         {
            text: 'все',
            type: 'all'
         },
         {
            text: 'завершённые',
            type: 'completed'
         },
         {
            text: 'в работе',
            type: 'progress'
         },
         {
            text: 'удалённые',
            type: 'remove'
         },
      ]*/
   }

   action(e, item) {
      e.preventDefault();

      let f = null;
      switch (item.type){
         case 'all' : f = (note) => true; break;
         case 'completed' : f = (note) => note.completed; break;
         case 'progress' : f = (note) => !note.completed; break;
      }

      this.props.filter(item.type, f);

   }

   render() {
      return (
          <div className="todo-block__userpanel">
             <div className="todo-block__userpanel-left col-md-3">
                <span>{ this.props.count ? `${this.props.count} items left`: '' }</span>
             </div>
             <div className="todo-block__userpanel-right col-md-9">
                <ul>
                   {items.map((item, index) =>
                       <li key={index}>
                          <a href="#" onClick={(e) => {this.action(e, item)}} className={this.props.active == item.type ? 'active-link' : ''}>{item.text}</a>
                       </li>
                   )}
                </ul>
             </div>
          </div>
      )
   }
}