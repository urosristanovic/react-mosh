import React from 'react';
import Like from './common/like';

const MoviesTable = ({ movies, onDelete, onLike, onSort }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td onClick={() => onSort('title')}>{movie.title}</td>
            <td onClick={() => onSort('genre.name')}>{movie.genre.name}</td>
            <td onClick={() => onSort('numberInStock')}>
              {movie.numberInStock}
            </td>
            <td onClick={() => onSort('dailyRentalRate')}>
              {movie.dailyRentalRate}
            </td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className='btn btn-danger'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
