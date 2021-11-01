import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndPoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = {
      title: 'a',
      body: 'b',
    };
    const { data: post } = await axios.post(apiEndPoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = 'UPDATED';
    // axios.patch(apiEndPoint + '/' + post.id, {title: post.title});
    // const { data } = await axios.put(apiEndPoint + '/' + post.id, post);
    // not good way to get data, we should call get to get data
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(apiEndPoint + '/' + post.id);
      // throw new Error('');
    } catch (ex) {
      // Expected (404: not found, 400: bad request) - CLIENT ERRORS
      // - Display a specific error message
      //
      // Unexpected (network down, server down, db down, bug)
      // - Log them
      // - Display a generic and friendly error message

      if (ex.response && ex.response.status === 404) {
        alert('This post has already been deleted.');
      } else {
        console.log('Logging the error', ex);
        alert('An unexpected error occurred.');
      }
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <button className='btn btn-primary' onClick={this.handleAdd}>
          Add
        </button>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className='btn btn-info btn-sm'
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
