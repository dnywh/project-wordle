import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults/GuessResults';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([
    {
      value: 'HORSE',
      id: 'guess1'
    },
    {
      value: 'CRASH',
      id: 'guess2'
    },
    {
      value: 'FARBA',
      id: 'guess3'
    },
    {
      value: 'CRAVE',
      id: 'guess4'
    },
    {
      value: 'BLACK',
      id: 'guess5'
    },
    {
      value: 'COBRA',
      id: 'guess6'
    }
  ])

  function handleSubmitGuess(label) {
    const nextGuess = {
      value: label,
      id: crypto.randomUUID(),
    }
    console.log({ nextGuess })

    setGuesses([...guesses, nextGuess])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
