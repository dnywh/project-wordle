import React from 'react';

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {}
  // console.log(statusObj)
  const allLetters = validatedGuesses.flat();
  // console.log(allLetters);

  allLetters.forEach(({ letter, status }) => {
    // console.log(letter, status)
    const currentStatus = statusObj[letter]

    if (currentStatus === undefined) {
      statusObj[letter] = status
      // console.log(letter, "doesn't have a status yet, taking on ", status)
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
      // console.log("better status for ", letter, "going down to ", status, newStatusRank, "was ", currentStatusRank)
      statusObj[letter] = status
    }
    console.log(statusObj)
    return statusObj
  })

}

function VirtualKeyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses)

  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <ul key={index}>
          {row.map((letter) => {
            { console.log(statusByLetter["O"]) } (
              <li
                key={letter}
                className={`letter ${statusByLetter[letter] || ''}`}>
                {letter}
              </li>
            )
          })}
        </ul>
      ))}
    </div>
  );
}

export default VirtualKeyboard;
