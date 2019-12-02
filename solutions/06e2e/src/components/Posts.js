import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array,
    onPost: PropTypes.func,
    onRemovePost: PropTypes.func
  };

  state = {
    post: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const { post } = this.state;
    this.props.onPost(post);
    this.setState({
      post: ''
    })
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    return (
      <>
        <form
          onSubmit={this.onSubmit}
          data-test="form"
          className="flex flex-col items-center w-1/2 mx-auto mt-8"
        >
            <label htmlFor="post" className="mb-4 w-full">
              Post <br />
              <input
                type="text"
                name="post"
                id="post"
                onChange={this.handleChange}
                value={this.state.post}
                placeholder="Write post here"
                className="my-4 p-2 rounded shadow border w-full"
              />
            </label>
            <input
              type="submit"
              value="Submit Post"
              className="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded"
            />
        </form>
        <ul className="container mx-auto">
          {this.props.posts.map((post, i) => {
            return <Post key={i} post={post} onRemovePost={this.props.onRemovePost} />
          })}
        </ul>
      </>
    );
  }
}

export default Posts;
