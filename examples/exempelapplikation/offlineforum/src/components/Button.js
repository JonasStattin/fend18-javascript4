import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = 'bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full';
/* Highway to the... */
const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';

const Button = ({ onClick, children, className, danger }) => (
  <button
    className={`${danger ? dangerStyle : defaultStyle} ${className}`}
    onClick={onClick}
    data-test='button'
  >
    { children }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  danger: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  danger: false
}

export default Button;
