import React from 'react';
import PropTypes from 'prop-types';

import InfoCard from '../info-card/info-card';
import './cards-container.css';

const CardsContainer = (props) => {

  const infoCards = props.data.map( (place, i) => {
    return (
      <InfoCard 
        key={place.location}
        data={place} 
        compareData={props.compareData}
      />
    );
  });

  return (
    <div className='cards-container'>
      { infoCards }
    </div>

  );
};

CardsContainer.propTypes = {
  data: PropTypes.array,
  compareData: PropTypes.func
};

export default CardsContainer;
