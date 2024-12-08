import React from 'react';

function GuessInput({ handleSubmitGuess }) {

  const [label, setLabel] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault()
        handleSubmitGuess(label)
        setLabel('')
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
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={label}
        onChange={event => {
          const formattedLabel = event.target.value.toUpperCase();
          if (/^[a-zA-Z]{0,5}$/.test(formattedLabel)) {
            setLabel(formattedLabel)
          }
        }}
      />
    </form>
  );
}

export default GuessInput;
