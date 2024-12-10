import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import VirtualKeyboard from '../VirtualKeyboard';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)
    // Check if tentativeGuess was true or false
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if ((nextGuesses.length) >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  )


  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      <VirtualKeyboard validatedGuesses={validatedGuesses} />

      {gameStatus === "won" && (<WonBanner numOfGuesses={guesses.length} />)}
      {gameStatus === "lost" && (<LostBanner answer={answer} />)}
    </>
  );
}

export default Game;
