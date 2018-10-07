import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';

import App from '../../App/App';

describe('App', () => {

  it('should have hold the right elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  }),

  it('should add a district to the comparison array', () => {
    const wrapper = shallow(<App />);
    wrapper.instance()

  })
  

})