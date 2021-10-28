import './App.css';
import Movies from './components/movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/common/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MoviesDetails from './components/movieDetails';

function App() {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/customers' exact component={Customers} />
          <Route path='/rentals' exact component={Rentals} />
          <Route path='/movies/:id' exact component={MoviesDetails} />
          <Route path='/movies' exact component={Movies} />

          <Redirect exact from='/' to='/movies' />

          <Route path='/not-found' component={NotFound} />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
