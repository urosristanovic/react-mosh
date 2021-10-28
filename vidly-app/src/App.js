import './App.css';
import Movies from './components/movies';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './components/common/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';

function App() {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/movies' component={Movies} />
        <Redirect from='/' to='/movies' />
      </main>
    </div>
  );
}

export default App;
