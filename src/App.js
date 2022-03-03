import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState('');
  const [like, setLike] = useState(false);
  const [theirName, setTheirName] = useState('Hooman!');
  const [theirAge, setTheirAge] = useState(18);

  const clickHandler = () => setCount(count + 1);
  const changeHandler = (e) => setChange(e.target.value);
  const likeHandler = (e) => setLike(e.target.checked);

  const inputNameHandler = (e) => setTheirName(e.target.value);
  const inputAgeHandler = () => setTheirAge(theirAge + 1);
  return (
    <div className="AppDoo">
      <h1>Hello Dear User!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={clickHandler}>You Have Pressed {count} Times</button>

      <h1>Input</h1>
      <p>Edit the Input Text</p>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Type Something Here"
      />
      <p>{change}</p>
      <h1>Check Input</h1>

      <label>
        <input type="checkbox" checked={like} onChange={likeHandler} /> You{' '}
        {like ? 'like this' : 'Did not like this'}
      </label>
      <h1>Both Combined</h1>
      <label>
        <input
          placeholder={theirName}
          onChange={inputNameHandler}
          type="text"
        />
      </label>

      <div>
        <button onClick={inputAgeHandler}>Increment Age</button>
      </div>

      <p>
        Hello {theirName} Your Age Is {theirAge}
      </p>
    </div>
  );
}
