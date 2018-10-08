import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';

import InfoCard from './info-card';

describe('info-card', () => {
  let data;
  let compareMock;
  let wrapper;

  beforeEach(() => {
    data = {"stats":{"2004":0.24,"2005":0.278,"2006":0.337,"2007":0.395,"2008":0.536,"2009":0.598,"2010":0.64,"2011":0.672,"2012":0.695,"2013":0.703,"2014":0.741},"location":"COLORADO"}
    compareMock = jest.fn()
    wrapper = shallow(<InfoCard data={data} compareData={compareMock}/>)
  })

  it('should render the correct elements', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should compare data', () => {
    wrapper.simulate('click')
    expect(compareMock).toHaveBeenCalled()
  })


})