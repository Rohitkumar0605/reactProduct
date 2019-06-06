import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from './header.js';
import Product from './components/Product';
import Home from './components/Home';
import axios from 'axios';
import Recharts from './components/Recharts';


class App extends Component {
  overview = () => {
    return new Promise((resolve, reject) => {
      axios.put('http://10.117.189.210:8090/app/updateOverviewCount').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
render() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Header />
        <button onClick={this.overview}><Link to ="/product" >Product-list</Link></button>
        <button><Link to ="/home" >DashBoard</Link></button>
         <div>
                  <Switch>
                     <Route path='/' component={Home} exact/>
                     <Route path='/home' component={Home}/>
                     <Route path='/recharts' component={Recharts} />
                     <Route path='/product' component={Product}/>
                  </Switch>
               </div>
          </div>
          </BrowserRouter>
      </div>
          
    );
  }
}

export default App;