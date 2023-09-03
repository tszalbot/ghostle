import { ghosts } from './ghosts'
import { evidenceEnum } from './evidence.enum'
import { Core } from '../components/core/Core'

export default function Phasmophobia () {
  return (
    <main className="main">
      <Core
        title="Guess the ghost from Phasmophobia"
        ghosts={ghosts}
        evidences={evidenceEnum}
      ></Core>
    </main>
  )
}
