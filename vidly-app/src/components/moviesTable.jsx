import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like' },
    { key: 'delete' },
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table className='table'>
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td onClick={() => this.raiseSort('title')}>{movie.title}</td>
              <td onClick={() => this.raiseSort('genre.name')}>
                {movie.genre.name}
              </td>
              <td onClick={() => this.raiseSort('numberInStock')}>
                {movie.numberInStock}
              </td>
              <td onClick={() => this.raiseSort('dailyRentalRate')}>
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
  }
}

export default MoviesTable;
