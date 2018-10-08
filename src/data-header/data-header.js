import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './data-header.css'

class DataHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  searchChange = (e) => {
    const { value } = e.target;
    this.setState({
      search: value
    }, () => this.props.districtSearch(this.state.search));
  }

  render() {
    return (
      <div className='data-header'>

        <input
          className='search-input' 
          onChange={this.searchChange}
          value={this.state.search}
          placeholder='search districts here'
        >
        </input>
        <h3>Kindergartners in Full-Day-Programs</h3>
      </div>
    );
  }
}

DataHeader.propTypes = {
  data: PropTypes.array
};

export default DataHeader;