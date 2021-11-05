import './App.css';
import { Component } from 'react';
import MoviePage from './context/MoviePage';
import Movie from './hoc/Movie';
import Users from './hoc/Users';
import Counter from './hooks/Counter';
import UserContext from './context/userContext';

class App extends Component {
  state = {
    currentUser: {
      name: 'Urosh',
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div className='App'>
          <MoviePage />
          {/* <Movie id='1' />
              <Counter />
              <Users /> */}
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
