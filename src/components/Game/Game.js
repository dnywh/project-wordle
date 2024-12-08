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
  const [guess, setGuess] = React.useState('')
  const [guesses, setGuesses] = React.useState(['ERASER', 'HORSE'])

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput guess={guess} setGuess={setGuess} handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
