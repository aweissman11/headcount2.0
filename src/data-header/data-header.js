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
    });
  }

  enterSearch = () => {
    this.props.districtSearch(this.state.search);
  }

  // enterDropdown = (target) => {
  //   this.props.districtSearch(target);
  // }

  render() {
    return (
      <div className='data-header'>

        <input
          className='search-input' 
          onChange={this.searchChange}
          onKeyUp={this.enterSearch}
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

// <select className='district-dropdown'>
//   {
//     this.props.data.map( (place, i) => {
//       return (
//         <option  onSubmit={() => this.enterDropdown(place.location.toUpperCase())} key={Date.now() + (i*43)} value={place.location}>
//           {place.location.toUpperCase()}
//         </option>
//       )
//     })
//   }
// </select>