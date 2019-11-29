import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Button from './Button';
import Comments from './Comments';

const SinglePost = ({ title, content, author, id, date, currentPersona, onClick }) => (
  <div className="w-full shadow p-6 m-6 border rounded relative">
    <article className="mb-2">
      { currentPersona === author && 
        <Button 
          danger
          onClick={() => onClick(id)} 
          className='absolute pin-t pin-r mx-4 my-6'
        >
          x
        </Button>
      }
      <h2 className="mb-4 w-4/5">{ title }</h2>
      <ReactMarkdown source={content} className="mb-4 text-grey-darkest markdown" />
      <p className="text-grey-dark mb-4">Posted by: { author } @ { date }</p>
      
    </article>
    <Comments postId={id} currentPersona={currentPersona} />
  </div>
);

SinglePost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  currentPersona: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SinglePost;
