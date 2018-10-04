import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DataHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }
  }

  searchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  enterSearch = () => {
    this.props.districtSearch(this.state.search)
  }

  enterDropdown = (target) => {
    console.log('click')
    this.props.districtSearch(target)
  }

  render() {
    return (
      <div className='data-header'>

        <input onChange={this.searchChange} onKeyUp={this.enterSearch} value={this.state.search} placeholder='search'></input>
        <h3>INFO</h3>
      </div>
    )
  }
}

DataHeader.propTypes = {
  data: PropTypes.array
}

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