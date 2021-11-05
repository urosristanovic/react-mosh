import './App.css';
import { Component } from 'react';
import MoviePage from './context/MoviePage';
import Movie from './hoc/Movie';
import Users from './hoc/Users';
import Counter from './hooks/Counter';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';

class App extends Component {
  handleLoggedIn = username => {
    console.log('Getting the user: ' + username);
    const user = { name: 'Mosh' };
    this.setState({ currentUser: user });
  };

  state = {
    currentUser: {
      name: 'Urosh',
    },
  };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div className='App'>
            <MoviePage />
            {/* <Movie id='1' />
              <Counter />
            <Users /> */}
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
