import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';

import App from './App';

describe('App', () => {
  let cleanData;
  let mockComparison;
  let wrapper;

  beforeEach(() => {
    cleanData = new DistrictRepository(kinderData)
    wrapper = shallow(<App />);
    wrapper.setState({
      data: cleanData.findAllMatches(),
      cleanData: cleanData
    })
  })

  it('should have hold the right elements', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start with a full state', () => {
    expect(wrapper.state('data').length).toEqual(181)
    expect(Object.keys(wrapper.state('cleanData')).length).toEqual(6)
  })

  it('should only display what matches the search', () => {
    wrapper.instance().districtSearch('col')
    expect(wrapper.state('data').length).toEqual(2)
  })
  
  it('should add a comparison card', () => {
    wrapper.instance().addComparisonCard('COLORADO')
    expect(wrapper.state('comparison').length).toEqual(1)
    wrapper.instance().addComparisonCard('ACADEMY 20')
    expect(wrapper.state('comparison').length).toEqual(2)
    wrapper.instance().addComparisonCard('COLORADO SPRINGS 11')
  })
  
  it('should remove a comparison card', () => {
    wrapper.instance().addComparisonCard('colorado')
    wrapper.instance().addComparisonCard('ACADEMY 20')
    expect(wrapper.state('comparison').length).toEqual(2)
    wrapper.instance().removeComparisonCard('COLORADO')
    expect(wrapper.state('comparison').length).toEqual(1)
    wrapper.instance().removeComparisonCard('ACADEMY 20')
    expect(wrapper.state('comparison').length).toEqual(0)
  })

  it('should start without comparison data', () => {
    expect(wrapper.state('comparisonData')).toEqual({})
  })

  it('should add comparison data', () => {
    wrapper.instance().addComparisonCard('colorado')
    wrapper.instance().addComparisonCard('ACADEMY 20')
    expect(wrapper.state('comparisonData')).toEqual({"ACADEMY 20": 0.407, "compared": 1})
  })
  

})