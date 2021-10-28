import React, { Component } from 'react';

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.replace('/movies');
  };

  render() {
    return (
      <div className='p-5'>
        <h1>Movie Form {this.props.match.params.id} </h1>
        <button onClick={this.handleSave} className='btn btn-primary'>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
