import {Link} from 'react-router';
import {autobind} from 'core-decorators';

const data = require('../data.json');

@autobind()
export default class Profile extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         users: [1,2,3,4,5,6,7,8,9]
      };
   }

   goToBlogs() {
      this.props.router.push('/profile');
   }

   render() {
      if (this.props.children) {
         return (
             <div>
                {this.props.children}
             </div>
         )}

      let users = this.state.users.map((user, index) =>
          <div key={index}>
             {/*<Link to={ `/profile/${index}` } > Go to user {index}</Link>*/}
             <Link to={{pathname: `/profile/${index}`, query: {ppp:1} }} key={index}> Go to user {index}</Link>
          </div>
      );

      return (
          <div className="profile-content">

             <h2>Информация о пользователе</h2>

             {users}

             <div className="info">
                <h3>Дополнительная информация2</h3>
                { data.map((item, index) =>
                    <div className="data-block" key={index}>
                       <div className="data-block__item">{item.id}</div>
                       <div className="data-block__item">{item.title}</div>
                       <div className="data-block__item">{item.body}</div>
                    </div>
                )}
                { /*{JSON.stringify(data)};*/ }
             </div>
          </div>
      );
   }
}