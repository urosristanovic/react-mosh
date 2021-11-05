import React, { useContext } from 'react';
import UserContext from './userContext';

const MovieRow = props => {
  const currentUser = useContext(UserContext);
  console.log('context', currentUser);

  return <div>{currentUser.name}</div>;
};

export default MovieRow;
