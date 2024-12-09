import React from 'react';

import { sample } from '../../utils';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

function VirtualKeyboard() {
  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <ul key={index}>
          {row.map((key, index) => (
            <li key={index} className={sample(['misplaced', 'correct', 'incorrect', '', '', ''])}>{key.toUpperCase()}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default VirtualKeyboard;
