import React from 'react';

import { range } from '../../utils';
import { NUM_OF_CHARACTERS } from '../../constants';

function Guess({ guess }) {
  return (
    <React.Fragment>
      <p className="guess">
        {range(NUM_OF_CHARACTERS).map((index) => (
          <span key={index} className="cell">{guess[index]}</span>)
        )}
      </p>
    </React.Fragment>
  );
}

export default Guess;
