import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults';
import Banner from '../Banner'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// Set an empty status
// let status = ""

function Game() {

  const [guesses, setGuesses] = React.useState('')
  const [status, setStatus] = React.useState('')

  function handleSubmitGuess(nextGuess) {
    setGuesses([...guesses, nextGuess])
    // Check if nextGuess was true or false
    if (answer === nextGuess) {
      setStatus('happy')
    }

    if ((guesses.length + 1) === NUM_OF_GUESSES_ALLOWED) {
      setStatus('sad')
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      <Banner guesses={guesses} answer={answer} status={status} />
    </>
  );
}

export default Game;
