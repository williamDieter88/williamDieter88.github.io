import React, { Component } from 'react';
import propTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <div>
        <span className="rating">{this.props.rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: propTypes.number.isRequired };

export default Rating;
