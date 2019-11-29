import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SingleComment = ({ id, author, onClick, currentPersona, comment, date }) => (
  <div key={id} className="py-2 border-b relative">
    {currentPersona === author && (
      <Button
        danger
        onClick={() => onClick(id)}
        className="absolute pin-t pin-r my-3"
      >
        x
      </Button>
    )}
    <p className="text-grey-darker mb-4">{comment}</p>
    <p className="text-grey-dark mb-4">
      Posted by: {author} @ {date}
    </p>
  </div>
);

SingleComment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPersona: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default SingleComment;
