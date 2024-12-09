import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {

  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault()
        handleSubmitGuess(tentativeGuess)
        setTentativeGuess('')
      }}
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
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={tentativeGuess}
        onChange={event => {
          const formattedGuess = event.target.value.toUpperCase();
          if (/^[a-zA-Z]{0,5}$/.test(formattedGuess)) {
            setTentativeGuess(formattedGuess)
          }
        }}
      />
    </form>
  );
}

export default GuessInput;
