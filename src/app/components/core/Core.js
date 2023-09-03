'use client'
import { useState } from 'react'
import { GuessInput } from '../guess-input/GuessInput'
import { GuessTable } from '../guess-table/GuessTable'
import { GhostMenu } from '../ghost-menu/GhostMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export function Core ({ title, ghosts, evidences }) {
  const [isWon, setIsWon] = useState(false)
  const [targetGhost, setTargetGhost] = useState(getTargetGhost(ghosts) ?? [])
  const [guessedGhosts, setGuessedGhosts] = useState([])
  const availableGhosts = ghosts.filter(ghost =>
    !guessedGhosts.includes(ghost)
  )
  const onGuess = ghost => {
    if (isWon || guessedGhosts.find(({ name }) => name === ghost.name)) {
      return
    }

    if (ghost.name === targetGhost.name) {
      setIsWon(true)
    }
    setGuessedGhosts([
      ghost,
      ...guessedGhosts
    ])
  }

  const restartGame = () => {
    setIsWon(false)
    setTargetGhost(getTargetGhost(ghosts))
    setGuessedGhosts([])
  }

  return (
    <>
      <div className="flex gap-5 items-center">
        <a className="btn" href="/">
          <FontAwesomeIcon icon={faAngleLeft}/>
        </a>
        <h1>{title}</h1>
        <GhostMenu ghosts={ghosts} evidences={Object.values(evidences)} onGuess={onGuess}/>
      </div>
      <GuessInput ghosts={availableGhosts} onGuess={onGuess} disabled={isWon}></GuessInput>
      <GuessTable guesses={guessedGhosts} target={targetGhost}></GuessTable>
      <div className="py-5">
        <button className="btn" onClick={restartGame}>New Game</button>
      </div>
    </>
  )
}

function getTargetGhost (ghosts) {
  return ghosts[Math.floor(Math.random() * ghosts.length)]
}
