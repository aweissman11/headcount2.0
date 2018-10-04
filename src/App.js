import React, { Component } from 'react';

import kinderData from './data/kindergartners_in_full_day_program.js';

import './App.css';
import DataHeader from './data-header';
import CardsContainer from './cards-container';
import DistrictRepository from './helper';



class App extends Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {

    const cleanData = new DistrictRepository(kinderData)
    this.setState({
      data: cleanData.findAllMatches()
    })
  }

  districtSearch = (entry) => {
    const cleanData = new DistrictRepository(kinderData)
    this.setState({
      data: cleanData.findAllMatches(entry)
    })
  }

  render() {

    const { data } = this.state

    return (
      <div>
        <br />
        Welcome To Headcount 2.0
        <hr />
        <DataHeader data={data} districtSearch={this.districtSearch}/>
        <hr />
        <CardsContainer data={data}/>
      </div>

    );
  }
}

export default App;
