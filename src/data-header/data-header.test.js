import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';

import DataHeader from './data-header';

describe('data-header', () => {
  let cleanData;
  let data;
  let searchMock;
  let wrapper;

  beforeEach(() => {
    cleanData = new DistrictRepository(kinderData)
    data = cleanData.findAllMatches()
    searchMock = jest.fn()
    wrapper = shallow(<DataHeader data={data} districtSearch={searchMock}/>)
  })

  it('should render the correct elements', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls searchChange when search is changed', () => {
    wrapper = mount(<DataHeader data={data} districtSearch={searchMock} />)
    const spy = spyOn(wrapper.instance(), 'searchChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'col' } }
    wrapper.find('.search-input').simulate('change', mockEvent)
    expect(spy).toHaveBeenCalled()
  })

  it('calls enterSearch on key up', () => {
    wrapper = mount(<DataHeader data={data} districtSearch={searchMock} />)
    const spy = spyOn(wrapper.instance(), 'enterSearch')
    wrapper.instance().forceUpdate()
    wrapper.find('.search-input').simulate('keyUp')
    expect(spy).toHaveBeenCalled()
  })

  it('updates state when searchChange is called', () => {
    const mockEvent = { target: { value: 'something' } }
    wrapper.instance().searchChange(mockEvent)
    expect(wrapper.state('search')).toBe('something')
  })

  it('should be able to search', () => {
    wrapper.instance().enterSearch()
    expect(searchMock).toHaveBeenCalled()
  })



})