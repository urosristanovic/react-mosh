import React, { useContext } from 'react';
import UserContext from './userContext';
import CartContext from './cartContext';

const MovieRow = props => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log('Cart context: ', cartContext);

  return (
    <div>
      Movie Row: {userContext.currentUser ? userContext.currentUser.name : ''}
    </div>
  );
};

export default MovieRow;
