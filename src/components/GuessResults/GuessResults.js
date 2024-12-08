import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from '../Guess';

// Set number of allowed guesses
const numOfGuessesAllowed = NUM_OF_GUESSES_ALLOWED


function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(numOfGuessesAllowed).map(({ value, id }, index) => (
        console.log(index, guesses[index].value)
        // <Guess value={guesses[index].value} />

      ))}
    </div>
  );
}

export default GuessResults;
