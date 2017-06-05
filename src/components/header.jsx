import {Link} from 'react-router';
import Menu from './menu';

export default class Header extends React.Component {
   render() {

      return (
          <header className="header">
             <div className="container">

                <Link to="/" class="navbar-brand">Project name</Link>

                <Menu title={this.props.title} />

                <form class="navbar-form navbar-right">
                   <input type="text" class="form-control" placeholder="Search..." />
                </form>
             </div>
          </header>
      );
   }
}
