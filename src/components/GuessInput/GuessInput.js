import React from 'react';

function GuessInput({ guess, setGuess, handleSubmit }) {

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(handleSubmit)}
    >
      <label
        htmlFor="guess-input"
      >
        Enter guess:
      </label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={event => {
          const nextGuess = event.target.value.toUpperCase();
          if (/^[a-zA-Z]{0,5}$/.test(nextGuess)) {
            setGuess(nextGuess)
          }
        }}
      />
    </form>
  );
}

export default GuessInput;
