import React from 'react';

let status = ""

function BannerText({ guesses, answer }) {

  if (status === 'happy') {
    return (
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
      </p>
    )
  } else if (status === 'sad') {
    return (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    )
  }
}


function Banner({ guesses, answer }) {

  if (answer === guesses[guesses.length - 1]) {
    status = "happy"
  }

  if (!status) {
    return null
  } else {
    return (
      <div className={`${status} banner`}>
        <BannerText status={status} guesses={guesses} answer={answer} />
      </div>);
  }

}

export default Banner;
