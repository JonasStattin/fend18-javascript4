import React from 'react';
import PropTypes from 'prop-types';

const style = `font-bold py-2 px-4 mb-2 rounded-full h-8`;

const Message = ({ bot, message }) => (
  <p
    className={`bg-${
      bot ? 'white text-grey-darker' : 'indigo-dark text-white'
    } ${style}`}
  >
    {message}
  </p>
);

Message.propTypes = {
  bot: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
}

export default Message;
