import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

export const checkboxStates = {
  unchecked: 'unchecked',
  checked: 'checked',
  disabled: 'disabled'
}

const classNameMap = {
  [checkboxStates.unchecked]: 'text-bold',
  [checkboxStates.checked]: 'text-bold',
  [checkboxStates.disabled]: 'line-through text-gray-400'
}

const iconMap = {
  [checkboxStates.unchecked]: faSquare,
  [checkboxStates.checked]: faCheckSquare,
  [checkboxStates.disabled]: faSquare
}

export function Checkbox ({ children, state, onClick }) {
  return (
    <label className={`select-none cursor-pointer ${classNameMap[state]}`} onClick={onClick}>
      <FontAwesomeIcon icon={iconMap[state]} size="lg"/>
      <span className="px-1">
        {children}
      </span>
    </label>
  )
}
