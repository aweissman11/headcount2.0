import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';

import InfoCard from '../../info-card/info-card';

describe('InfoCard', () => {

  it('should have hold the right elements', () => {
    const wrapper = shallow(
                      <InfoCard
                        data=
                          {
                            { stats:
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
                              location: 'Colorado' 
                            } 
                          }
                      />);
    expect(wrapper).toMatchSnapshot()
  })

})