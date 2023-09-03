'use client'
export function GuessInput ({ ghosts, onGuess, disabled }) {
  function onSubmit (e) {
    e.preventDefault()

    const guessInput = e.target.guess
    const guess = guessInput.value.trim()
    const ghost = ghosts.find(({ name }) =>
      name.toLowerCase() === guess.toLowerCase()
    )

    if (ghost) {
      guessInput.value = ''
      onGuess(ghost)
    }
  }

  return (
    <form className="text-center py-5" onSubmit={onSubmit}>
      <input className="input" type="text" list="ghosts" name="guess" disabled={disabled}></input>
      <button className="btn" disabled={disabled}>Ok</button>

      <datalist id="ghosts">
        {ghosts.map(({ name }) =>
          <option key={name} value={name}></option>
        )}
      </datalist>
    </form>
  )
}
