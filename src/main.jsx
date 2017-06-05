import './vendors';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import Layout from './layout/layout';
import Index from './pages/index';
import Profile from './pages/profile';
import ProfileId from './pages/profileId';
import Help from './pages/help';
import TodoPage from './pages/todo';
import NotFound from './pages/notfound';

let page = document.getElementById('page');

ReactDOM.render(
    <Router history={browserHistory}>
       <Route component={Layout} >
          <Route path="/" component={Index} />
          {/*<Route path="/profile(/:userId)" component={Profile} />*/}
          <Route path="/profile" component={Profile} >
             <Route path=":userId" component={ProfileId} />
          </Route>
          <Route path="/help" component={Help} />
          <Route path="/todo" component={TodoPage} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="*" to="/notfound" />
       </Route>
    </Router>, page);




