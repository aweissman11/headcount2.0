import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';

import App from '../../App';

describe('App', () => {

  it('should pass a test', () => {
    console.log("pass!")
  }),

  it('should have hold the right elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  }),

  it()
  

})