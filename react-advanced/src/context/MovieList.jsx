import React from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

class MovieList extends React.Component {
  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {userContext => (
          <div>
            Movie List {userContext.name}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
