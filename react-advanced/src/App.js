import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';

function App() {
  return (
    <div className='App'>
      <Movie id='1' />
      <Counter />
    </div>
  );
}

export default App;
