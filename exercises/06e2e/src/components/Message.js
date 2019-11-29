import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string,
    body: PropTypes.string
  }).isRequired
};

const Message = ({ message }) => {
  if (message.type === 'ERROR') {
    return (
      <p className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 mb-4 rounded relative error">
        {message.body}
      </p>
    );
  }
  if (message.type === 'SUCCESS') {
    return (
      <p className="bg-green-lightest border border-green-light text-green-dark px-4 py-3 mb-4 rounded relative success">
        {message.body}
      </p>
    );
  }
  return (
    <p className="bg-blue-lightest border border-blue-light text-blue-dark px-4 py-3 mb-4 rounded relative success">
      Please login
    </p>
  );
};

Message.propTypes = propTypes;

export default Message;
