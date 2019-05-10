import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardProps.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardProps.img} alt={props.cardProps.author} />
        </div>
        <span>By {props.cardProps.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  cardProps: PropTypes.objectOf(PropTypes.string)
}

export default Card;
