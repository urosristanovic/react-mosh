import React from 'react';
import UserContext from './userContext';

class MovieList extends React.Component {
  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {userContext => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
