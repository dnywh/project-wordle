import React from 'react';

function Guess({ value, id }) {
  return (
    <React.Fragment key={id}>
      <p>{value}</p>
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    </React.Fragment>
  );
}

export default Guess;
