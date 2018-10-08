import React from 'react';
import PropTypes from 'prop-types';

import './info-card.css';

const Card = ({ data, compareData }) => {
  return (
    <div className='info-card' onClick={() => compareData(data.location)}>
      <h4>{data.location}</h4>

      <div className='year-list'>
        {
          Object.keys(data.stats).map( (year, i) => {
            if (data.stats[year] > .5) {
              return (
                <p key={data.stats[year] + year} className='hi'>
                  {year}: {data.stats[year]} 
                  <span className='emoji'>...
                    <span role='img' aria-label='emoji'>👍</span>
                  </span>
                </p>
              );
            } else {
              return (
                <p key={data.stats[year] + year} className='low'>
                  {year}: {data.stats[year]} 
                  <span className='emoji'>...
                    <span role='img' aria-label='emoji'>😡</span>
                  </span>
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
  data: PropTypes.object,
  compareData: PropTypes.func
};

export default Card;
