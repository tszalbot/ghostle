import { ghosts } from './ghosts'
import { evidenceEnum } from './evidence.enum'
import { Core } from '../components/core/Core'

export default function Demonologist () {
  return (
    <main className="main">
      <Core
        title="Guess the ghost from Demonologist"
        ghosts={ghosts}
        evidences={evidenceEnum}
      ></Core>
    </main>
  )
}
