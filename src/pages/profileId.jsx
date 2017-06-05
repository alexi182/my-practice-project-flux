import {Link} from 'react-router';

export default class ProfileId extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      console.log(this.props);
      return (
          <div className="profile-content">
             <h2>Информация о пользователе - { this.props.params.userId }</h2>
             <Link to="/profile">Go back</Link>
          </div>
      );
   }
}

//this.props
//router - то что позволяет управлять роутером
// route - описание текщего роутера
// params - переданные параметры роута
// location - windows location

