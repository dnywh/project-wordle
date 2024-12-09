import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers.js';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

function VirtualKeyboard({ guesses, answer }) {
  const result = checkGuess(guesses[guesses.length - 1], answer)
  console.log(result)

  function handleClassUpdate(key) {
    // let className = sample(['misplaced', 'correct', 'incorrect', '', '', ''])
    let className = ""

    if (!result) {
      return className
    } else {
      range(5).map(num => {
        // console.log(key, result[num].letter)
        if (key === result[num].letter) {
          className = result[num].status
        }
      })

      return className
    }

  }

  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <ul key={index}>
          {row.map((key, index) => (
            <li key={index} className={handleClassUpdate(key.toUpperCase())}>{key.toUpperCase()}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default VirtualKeyboard;
