import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';

import Comparison from './comparison';

describe('comparison', () => {
  let cleanData;
  let mockComparison;
  let removeComparisonCardMock;
  let mockData;
  let wrapper;

  beforeEach(() => {
    cleanData = new DistrictRepository(kinderData)
    mockComparison = [ { stats:
                     { '2004': 0.24,
                       '2005': 0.278,
                       '2006': 0.337,
                       '2007': 0.395,
                       '2008': 0.536,
                       '2009': 0.598,
                       '2010': 0.64,
                       '2011': 0.672,
                       '2012': 0.695,
                       '2013': 0.703,
                       '2014': 0.741 },
                    location: 'COLORADO' },
                  { stats:
                     { '2004': 0.069,
                       '2005': 0.509,
                       '2006': 0.638,
                       '2007': 0.994,
                       '2008': 0.992,
                       '2009': 1,
                       '2010': 0.993,
                       '2011': 0.994,
                       '2012': 0.993,
                       '2013': 0.989,
                       '2014': 0.994 },
                    location: 'COLORADO SPRINGS 11' } ]
    removeComparisonCardMock = jest.fn()
    mockData = cleanData.compareDistrictAverages('COLORADO', 'COLORADO SPRINGS 11')
    wrapper = shallow(<Comparison 
                        comparison={mockComparison} 
                        removeComparisonCard={removeComparisonCardMock}
                        comparisonData={mockData}
                      />)
  })

  it('should render the correct component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should only have one InfoCard if there is only one', () => {
    mockComparison = [ { stats:
                     { '2004': 0.24,
                       '2005': 0.278,
                       '2006': 0.337,
                       '2007': 0.395,
                       '2008': 0.536,
                       '2009': 0.598,
                       '2010': 0.64,
                       '2011': 0.672,
                       '2012': 0.695,
                       '2013': 0.703,
                       '2014': 0.741 },
                    location: 'COLORADO' }]
    wrapper = shallow(<Comparison 
                        comparison={mockComparison} 
                        removeComparisonCard={removeComparisonCardMock}
                        comparisonData={mockData}
                      />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should display no Info', () => {
    mockComparison = []
    wrapper = shallow(<Comparison 
                        comparison={mockComparison} 
                        removeComparisonCard={removeComparisonCardMock}
                        comparisonData={mockData}
                      />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should ', () => {
    
  })

  it('should ', () => {

  })

})