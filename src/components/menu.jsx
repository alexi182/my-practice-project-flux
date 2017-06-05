import {Link} from 'react-router';

export default class Menu extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         active: this.props.active
      };
   }
   render() {
      return (
          <ul class="nav navbar-nav navbar-right">
             {/* <li>
              <Link to="/profile" class={`menu-link ${this.state.active}`} onClick={this.handleClick}>Profile</Link>
              </li>*/}
             <li>
                <Link to="/profile" class="menu-link">Profile</Link>
             </li>
             <li>
                <Link to="/help" class="menu-link">Help</Link>
             </li>
             <li>
                <Link to="/todo" class="menu-link">TodoList</Link>
             </li>
             <li>
                <Link to="/bla" class="menu-link">Bla</Link>
             </li>
            {/*<p>{this.props.newName}</p>*/}
          </ul>
      );
   }
}