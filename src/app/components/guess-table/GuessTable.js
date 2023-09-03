'use client'

import { useRef, useEffect } from 'react'
import { Guess } from './components/Guess'

export function GuessTable ({ guesses = [], target }) {
  const tableTop = useRef(null)

  useEffect(() => {
    tableTop.current.scrollIntoView({ behaviour: 'smooth' })
  }, [guesses])

  const formattedGuesses = guesses.map(guess => {
    guess.evidences = guess.evidences
      .sort(
        evidence => target.evidences.includes(evidence)
          ? -1
          : 1
      )
    return guess
  })

  return (
    <div className="guess-table">
      <div ref={tableTop}/>
      {formattedGuesses.map(guess =>
        <Guess key={guess.name} guess={guess} target={target}></Guess>
      )}
    </div>
  )
}
