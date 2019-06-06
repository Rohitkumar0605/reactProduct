import React, { Component } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class Recharts extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      datalist:[]
    }
  }
  componentDidMount() {
    this.getOverviewData().then(response => {
        console.log(response)
      this.setState({ list: response.data });
      console.log(this.state.list)
    });
    this.getProductData().then(response => {
        console.log(response)
      this.setState({ datalist: response.data });
      console.log(this.state.datalist)
    });
  }
  getOverviewData = () => {
    return new Promise((resolve, reject) => {
      axios.get(' http://10.117.189.210:8090/app/getOverviewAuditDetail').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  getProductData = () => {
    return new Promise((resolve, reject) => {
      axios.get(' http://10.117.189.210:8090/app/getAuditDetail').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.datalist}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productGroupName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" stackId="a" fill="#8884d8" />
      </BarChart>
    );
  }
}
