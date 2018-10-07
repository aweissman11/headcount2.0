import React, { Component } from 'react';
// import ReactChartkick, { AreaChart, LineChart, ColumnChart } from 'react-chartkick'
import PropTypes from 'prop-types';
// import Chart from 'chart.js'

import InfoCard from './info-card';

// ReactChartkick.addAdapter(Chart)

const Comparison = (props) => {

  if (props.comparison.length === 0) {
    return (
      <div className='comparison'>
        Comparison goes here
      </div>
    )
  } else if (props.comparison.length === 1) {
    return (
      <div className='one-comparison'>
        <InfoCard
          data={props.comparison[0]}
          compareData={props.removeComparisonCard}
        />
        <div>Click another card to see a comparision</div>
      </div>
    )    
  } else {
    return (
      <div className='two-comparison'>
        <InfoCard
          data={props.comparison[0]}
          compareData={props.removeComparisonCard}
        />
        <div>Comparison Card</div>
        <InfoCard
          data={props.comparison[0]}
          compareData={props.removeComparisonCard}
        />
      </div>
    )
  }
}


Comparison.propTypes = {
  // data: PropTypes.object
}

export default Comparison;
