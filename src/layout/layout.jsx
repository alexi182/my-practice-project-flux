import Header from '../components/header';
import Footer from '../components/footer';
import {autobind} from 'core-decorators';

@autobind()
export default class Layout extends React.Component {
   constructor(props) {
      super(props)
   }

   back() {
      this.props.router.goBack();
   }

   forward() {
      this.props.router.goForward();
   }

   render() {
      const title = 'Hi!';

      return (
          <div className="page-inner">

             <div>
                <button type="button" onClick={this.back}>Go Back</button>
             </div>
             <div>
                <button type="button" onClick={this.forward}>Go Forward</button>
             </div>

             <Header header={title} />
             <div className="content container">
                {this.props.children}
             </div>
             <Footer />
          </div>
      );
   }
}

