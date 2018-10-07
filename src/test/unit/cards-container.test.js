import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';

import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

import CardsContainer from '../../cards-container/cards-container';

describe('CardsContainer', () => {

  it('should have hold the right elements', () => {
    const district = new DistrictRepository(kinderData);
    const wrapper = shallow(<CardsContainer data={district.findAllMatches()}/>);
    expect(wrapper).toMatchSnapshot()
  })

})