import Search from '../components/search';
import Service from '../components/service';
import './help.css';
import { autobind } from 'core-decorators';
@autobind()

export default class Help extends React.Component {
   constructor(props) {
      super(props);

      this.name = "Will";
      this.count = "300";

      this.state = {
         text: this.props.text,
         count: this.count
      };
   }

   handleChange(e) {
      this.setState({
         text: e.target.value,
         count: this.count - e.target.value.length
      });
   }

   render() {
      // console.log(this.props);
      return (
          <div className="help-content">
             <h2>Раздел помощи</h2>

             <textarea placeholder="Текст сообщения" className="form-control" value={this.state.text} onChange={this.handleChange} />

             <div className="count-remains">
                Максимальное число символов:{this.state.count}
             </div>

             <div>
                <p>Мгновенный поиск: {this.state.text}</p>
                <input type="text" />
                <Search />
                <Service />
             </div>
          </div>
      );
   }

}
