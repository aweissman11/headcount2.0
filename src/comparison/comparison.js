import React from 'react';
import PropTypes from 'prop-types';

import InfoCard from '../info-card/info-card';
import './comparison.css';

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
        <div className='compare-info'>
          <h3>Comparison Card</h3>
          <p>&larr;   {props.comparison[0].location} avg: {props.comparisonData[props.comparison[0].location]} </p>
          <p>School 1/ School 2: {props.comparisonData.compared}</p>
          <p>{props.comparison[1].location} avg: {props.comparisonData[props.comparison[1].location]}   &rarr;</p>
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
  comparison: PropTypes.array,
  removeComparisonCard: PropTypes.func,
  comparisonData: PropTypes.object
};

export default Comparison;
