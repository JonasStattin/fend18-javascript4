import React from 'react';
import PropTypes from 'prop-types';
import './TypingIndicator.css';

const TypingIndicator = ({ typing }) => {
  return typing ? (
    <div className="TypingIndicator bg-indigo-dark text-white font-bold px-4 h-8 rounded-full">
      <span />
      <span />
      <span />
    </div>
  ) : null;
};

TypingIndicator.propTypes = {
  typing: PropTypes.bool
}

TypingIndicator.defaultProps = {
  typing: false
}

export default TypingIndicator;
