import './App.css';
import Movie from './hoc/Movie';
import Users from './hoc/Users';
import Counter from './hooks/Counter';

function App() {
  return (
    <div className='App'>
      <Movie id='1' />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
