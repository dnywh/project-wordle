import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults';
import Banner from '../Banner'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState('')

  function handleSubmitGuess(nextGuess) {
    setGuesses([...guesses, nextGuess])
    // Check if nextGuess was true or false
    return result = nextGuess === answer;
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      <Banner guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
