import React from 'react';

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {}
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter]

    if (currentStatus === undefined) {
      statusObj[letter] = status
      return
    }

    const statusRanks = {
      correct: 1,
      misplaced: 2,
      incorrect: 3
    }

    const currentStatusRank = statusRanks[currentStatus]
    const newStatusRank = statusRanks[status]

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status
    }
  })

  return statusObj
}

function VirtualKeyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses)

  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <ul key={index}>
          {row.map((letter) => (
            <li
              key={letter}
              className={`letter ${statusByLetter[letter] || ''}`}>
              {letter}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default VirtualKeyboard;
