import { useState } from 'react';
import classes from './Counter.module.scss';

export function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <div>
      <h1 className={classes.brown}>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
