import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';

import CardsContainer from './cards-container';
import InfoCard from '../info-card/info-card';

describe('cards-container', () => {
  let cleanData;
  let data;
  let compareDataMock;
  let wrapper;

  beforeEach(() => {
    cleanData = new DistrictRepository(kinderData)
    data = cleanData.findAllMatches()
    compareDataMock = jest.fn()
    wrapper = shallow(<CardsContainer data={data} compareData={compareDataMock}/>)
  })

  it('should render the correct amount of cards', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct amount of cards', () => {
    expect(wrapper.find(InfoCard).length).toEqual(181)
  })

})