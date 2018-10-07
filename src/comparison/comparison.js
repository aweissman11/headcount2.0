import React, { Component } from 'react';
// import ReactChartkick, { AreaChart, LineChart, ColumnChart } from 'react-chartkick'
import PropTypes from 'prop-types';
// import Chart from 'chart.js'

import InfoCard from '../info-card/info-card';
import './comparison.css';

// ReactChartkick.addAdapter(Chart)

const Comparison = (props) => {

  if (props.comparison.length === 0) {
    return (
      <div className='comparison'>
        Click on Districts to run a comparison analysis
      </div>
    );
  } else if (props.comparison.length === 1) {
    return (
      <div className='one-comparison'>
        <InfoCard
          data={props.comparison[0]}
          compareData={props.removeComparisonCard}
        />
        <div>Click another card to see a comparision</div>
      </div>
    );    
  } else {
    return (
      <div className='two-comparison'>
        <InfoCard
          data={props.comparison[0]}
          compareData={props.removeComparisonCard}
        />
        <div>
          Comparison Card
          <br />
          {props.comparison[0].location} avg: {props.comparisonData[props.comparison[0].location]} 
          <br />
          School 1/ School 2: {props.comparisonData.compared}
          <br />
          {props.comparison[1].location} avg: {props.comparisonData[props.comparison[1].location]}
        </div>
        <InfoCard
          data={props.comparison[1]}
          compareData={props.removeComparisonCard}
        />
      </div>
    );
  }
};


Comparison.propTypes = {
  // data: PropTypes.object
};

export default Comparison;
