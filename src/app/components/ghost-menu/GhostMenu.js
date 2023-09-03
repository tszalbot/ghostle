import { useState } from 'react'
import { Dialog } from '../dialog/Dialog'
import { Checkbox, checkboxStates } from '../checkbox/Checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'

export function GhostMenu ({ ghosts, evidences, onGuess }) {
  const getDefaultEvidenceState = () => evidences.reduce((o, name) => ({
    ...o,
    [name]: checkboxStates.unchecked
  }), {})

  const [isShown, setIsShown] = useState(false)
  const [evidenceState, setEvidenceState] = useState(getDefaultEvidenceState)
  const checkedEvidences = evidences.filter(ev => evidenceState[ev] === checkboxStates.checked)
  const disabledEvidences = evidences.filter(ev => evidenceState[ev] === checkboxStates.disabled)

  const toggleEvidence = evidence => {
    setEvidenceState(evidenceState => {
      const states = Object.values(checkboxStates)
      const currState = states.indexOf(evidenceState[evidence])
      const newState = states[(currState + 1) % states.length]

      return {
        ...evidenceState,
        [evidence]: newState
      }
    })
  }

  const isGhostActive = ({ evidences }) => {
    const isChecked = checkedEvidences.length === 0 || checkedEvidences.filter(ev => evidences.includes(ev)).length === checkedEvidences.length
    const isExcluded = disabledEvidences.filter(ev => evidences.includes(ev)).length > 0

    return isChecked && !isExcluded
  }

  const onGhostClick = (ghost) => {
    setIsShown(false)
    onGuess(ghost)
  }

  const Evidences = (
    <div className="menu-evidences">
      {evidences
        .map(evidence => <div key={evidence}>
          <Checkbox state={evidenceState[evidence]} onClick={() => toggleEvidence(evidence)}>{evidence}</Checkbox>
        </div>
        )}
    </div>
  )
  const Ghosts = (
    <div className="flex flex-wrap -mx-2">
      {ghosts.map(ghost =>
        <div
          key={ghost.name}
          className={`menu-ghost ${isGhostActive(ghost) ? 'active' : 'inactive'}`}
          onClick={() => isGhostActive(ghost) && onGhostClick(ghost)}
        >
          {ghost.name}
        </div>
      )}
    </div>
  )
  const ResetButton = (
    <button className="btn" onClick={() => setEvidenceState(getDefaultEvidenceState)}>
      <FontAwesomeIcon icon={faArrowRotateLeft}/>
    </button>
  )

  return (
    <>
      <button className="btn" onClick={() => setIsShown(true)}>
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <Dialog header={ResetButton} hasClose={true} opened={isShown} close={() => setIsShown(false)}>
        <div className="text-2xl">
          {Evidences}
          <hr className="my-4"></hr>
          {Ghosts}
        </div>
      </Dialog>
    </>
  )
}
