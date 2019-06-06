import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn, MDBCollapse} from "mdbreact";
import  {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import header from '../assets/header.css';
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

componentDidMount() {
    this.getData().then(response => {
        console.log(response)
      this.setState({ list: response.data });
      console.log(this.state.list)
    });
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.210:8090/app/getAllProductGroup').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

render() {
  const {list}=this.state;
  console.log(this.state.list.productName)
  return (
   
        <div>
          
           <div className="dropdown data bt1">
                  <button class="dropbtn">Mortgage</button>
                  <div class="dropdown-content">
                  <button>{this.state.list.productName}</button>
                  <button><Link to='/newloan'>credit approver</Link></button>
                  <button><Link to='/newloan'>Lending Maneger</Link></button>
                  </div>
                  </div>
                  <div className="dropdown data bt2">
                  <button class="dropbtn">Payments</button>
                  <div class="dropdown-content">
                     <button><Link to='/newloan'>credit assessor</Link></button>
                     <button><Link to='/newloan'>credit approver</Link></button>
                     <button><Link to='/newloan'>Lending Maneger</Link></button>
                  </div>
                  </div>
                  <div className="dropdown data bt3">
                  <button class="dropbtn">Savings</button>
                  <div class="dropdown-content">
                  <button><Link to='/newloan'>credit assessor</Link></button>
                  <button><Link to='/newloan'>credit approver</Link></button>
                  <button><Link to='/newloan'>Lending Maneger</Link></button>
                  </div>
                  </div>
      </div>
    );
  }
}

export default Product;