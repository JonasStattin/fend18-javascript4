import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array,
    onPost: PropTypes.func
  };

  state = {
    post: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const { post } = this.state;
    this.props.onPost(post);
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    console.log(this.props.posts)
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
        <ul>
          {this.props.posts.map((post, i) => {
          return <li key={i}>{post}</li>
          })}
        </ul>
      </>
    );
  }
}

export default Posts;
