import React, { Component } from 'react';
import ReactChartkick, { AreaChart, LineChart, ColumnChart } from 'react-chartkick';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import './info-card.css';

ReactChartkick.addAdapter(Chart);

const Card = ({ data, compareData }) => {
  return (
    <div className='info-card' onClick={() => compareData(data.location)}>
      <h4>{data.location}</h4>

      <div className='year-list'>
        {
          Object.keys(data.stats).map( (year, i) => {
            if (data.stats[year] > .5) {
              return (
                <p key={Date.now() + (i * 13)} className='hi'>
                  {year}: {data.stats[year]} 
                  <span className='emoji'>...👍</span>
                </p>
              );
            } else {
              return (
                <p key={Date.now() + (i * 17)} className='low'>
                  {year}: {data.stats[year]} 
                  <span className='emoji'>...😡</span>
                </p>
              );
            }
          })
        }
      </div>

    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object
};

export default Card;
