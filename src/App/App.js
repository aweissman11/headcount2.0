import React, { Component } from 'react';

import kinderData from '../data/kindergartners_in_full_day_program.js';
import thirdGraders from '../data/3rd_grade_tests.js';

import './App.css';
import DataHeader from '../data-header/data-header';
import CardsContainer from '../cards-container/cards-container';
import DistrictRepository from '../helper';
import Comparison from '../comparison/comparison';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      comparison: []
    };
  }

  componentDidMount() {
    const cleanData = new DistrictRepository(kinderData);
    this.setState({
      data: cleanData.findAllMatches(),
      cleanData: cleanData
    });
  }

  districtSearch = (entry) => {
    this.setState({
      data: this.state.cleanData.findAllMatches(entry)
    });
  }

  addComparisonCard = (district) => {
    const newDistrict = this.state.cleanData.findByName(district);

    this.setState({
      comparison: [newDistrict, ...this.state.comparison]
    });

    if (this.state.comparison.length >= 1) {
      this.setState({
        comparisonData: this.state.cleanData.compareDistrictAverages(district, this.state.comparison[0].location)
      });
    }
  }

  removeComparisonCard = (place) => {
    const newComparisons = this.state.comparison.filter(district => {
      return district.location !== place;
    });

    this.setState({comparison: newComparisons});
  }

  render() {

    const { data, comparison, comparisonData } = this.state;

    return (
      <div>
        <br />
        <h1>Welcome To Headcount 2.0</h1>
        <hr />
        <DataHeader 
          data={data}
          districtSearch={this.districtSearch}
        />
        <hr />
        <Comparison
          comparison={comparison}
          removeComparisonCard={this.removeComparisonCard}
          comparisonData={comparisonData}
        />
        <hr />
        <CardsContainer
          data={data}
          compareData={this.addComparisonCard}
        />
      </div>

    );
  }
}

export default App;
