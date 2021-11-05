import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;

    return () => {
      console.log('Clean up!');
    };
  });

  return (
    <>
      <input type='text' onChange={e => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times.
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Counter;
