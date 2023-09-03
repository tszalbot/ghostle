import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function Dialog ({ header, children, opened, hasClose, close }) {
  return (
    <div className={`dialog ${opened ? 'opened' : ''}`}>
      <div className="dialog-backdrop" onClick={() => close()}></div>
      <div className="dialog-frame" onClick={e => e.stopPropagation()}>
        <div className="dialog-header">
          {header}
          {hasClose
            ? (<button className="dialog-close btn" onClick={() => close()}>
                <FontAwesomeIcon icon={faTimes}/>
              </button>)
            : null
          }
        </div>
        <div className="dialog-body">
          {children}
        </div>
      </div>
    </div>
  )
}
