'use client'

export function Guess ({ guess, target }) {
  const guessState = guess.name === target.name
    ? 'success'
    : 'error'
  const getEvidenceState = evidence => target.evidences.includes(evidence)
    ? 'success'
    : 'error'

  return (
    <div className={'guess-row ' + guessState}>
      <div className={'guess-col ' + guessState}>{guess.name}</div>
      {guess.evidences.map(evidence =>
        <div className={'guess-col ' + getEvidenceState(evidence)} key={evidence}>{evidence}</div>
      )}
    </div>
  )
}
