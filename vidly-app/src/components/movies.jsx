import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = movie => {
    console.log(this.state.movies);
    deleteMovie(movie._id);
    this.setState({ movies: this.state.movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <>
        <p>Showing {count} movies in the database.</p>
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
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  //   state = {
  //     movies: getMovies(),
  //   };

  //   render() {
  //     console.log(this.state.movies);
  //     return (
  //       <table className='table'>
  //         <thead>
  //           <tr>
  //             <th scope='col'>Title</th>
  //             <th scope='col'>Genre</th>
  //             <th scope='col'>Number in stock</th>
  //             <th scope='col'>Daily Rental Rate</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {this.state.movies.map((movie, index) => {
  //             return (
  //               <tr key={index}>
  //                 <td>{movie.title}</td>
  //                 <td>{movie.genre.name}</td>
  //                 <td>{movie.numberInStock}</td>
  //                 <td>{movie.dailyRentalRate}</td>
  //                 <button className='btn btn-danger'>Delete</button>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     );
  //   }
}

export default Movies;
