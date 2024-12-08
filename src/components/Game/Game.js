import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults/GuessResults';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessCount, setGuessCount] = React.useState(0)
  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(''))

  function handleSubmitGuess(nextGuess) {
    if (guessCount < NUM_OF_GUESSES_ALLOWED) {
      // console.log("Guess number", { nextGuess })

      const nextGuesses = [...guesses]
      nextGuesses[guessCount] = nextGuess
      // nextGuesses.addat(0, guess.guess)
      // nextGuesses.addAtIndex(guess.guess, 0)

      setGuesses(nextGuesses)

      const nextGuessCount = guessCount + 1;
      setGuessCount(nextGuessCount)

    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
