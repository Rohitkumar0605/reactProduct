import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn, MDBCollapse} from "mdbreact";
import  {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import header from '../assets/header.css';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      productArry: [],
      productList: [],
      details: [],
      showModal: false,
      nextModal: false
    }
  }
  close = () => {
    this.setState({ showModal: false });
}

open = () => {
    this.setState({ showModal: true });
}
handleProducts=()=>{
  const {product1}=this.state;
  return new Promise((resolve, reject) => {
    axios.get(`http://10.117.189.210:8090/app/getAllProductDetails/${product1.productNameId}`).then(function (response) {
      //console.log(response)
      resolve(response);
    }).catch(function (error) {
      reject(error);
      this.open();
    });
  });
}
componentDidMount() {
  let output = [];
  var arr = []; 
  this.getData().then(response=> {
      this.setState({list:response.data});
      response.data.filter((productItem)=> {
         arr.push(productItem.productGroup);
      });
      let output = arr.filter((value) => {
        return !this[value.productGroupId] && (this[value.productGroupId] = true)
      }, Object.create(null))
      this.setState({productList: output})
  })
 
//console.log(output)
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.210:8090/app/getAllProductGroup').then(function (response) {
        //console.log(response)
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  getProductsList=(product)=> {
    console.log(product);
    var list = [];
    this.state.list.filter((product1)=> {
      console.log(product1.productGroup)
      if(product1.productGroup.productGroupId === product.productGroupId) {
        list.push(product1);
      }
      // this.open();
   });
   //console.log(list)
   this.setState({list})
  }
 
render() {
  return (
   
        <div>
          
           <div className="dropdown data bt1">
             {
                this.state.productList.map((product, i) => {
               return( <Accordion key={i}>
                 <AccordionItem>
                 <AccordionItemHeading  onClick={()=>this.getProductsList(product)}>
                 <AccordionItemButton >{product.productGroupName}</AccordionItemButton>
                 </AccordionItemHeading>
            <AccordionItemPanel>
            <div>
                    {this.state.list.map((product,i)=>{
                        return(
                          
                            <AccordionItemPanel key={i}>
                            
                            <AccordionItemButton onClick={()=>this.handleProducts(product)}>{product.productName}
                            </AccordionItemButton>
                            </AccordionItemPanel>
                        )
                    })}
                </div>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>

     )
 }
 )}
               </div>
               <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Product details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <form className="col-md-12 pb-2">
                                <input className="col-md-12" style={{ height: "47px" }} name="otp" required />
                            </form>
                            <div className="col-md-12">
                                <button className="btn btn-primary" style={{ width: "400px" }} onClick={this.redirect}>Submit</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
      </div>
    );
  }
}

export default Product;