import React, { useState } from 'react'
import ParticipantList from '../components/ParticipantList'
import DrawResults from '../components/DrawResults'
import { drawSecretSanta } from '../utils/draw'

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [results, setResults] = useState<Record<string, string> | null>(null)

  const handleDraw = () => {
    const r = drawSecretSanta(participants)
    setResults(r)
  }

  return (
    <div>
      <ParticipantList participants={participants} setParticipants={setParticipants} />

      <div className="mt-4 flex gap-2">
        <button
          className="btn btn-primary px-4 py-2 rounded disabled:opacity-50"
          disabled={participants.length < 2}
          onClick={handleDraw}
        >
          Sortear
        </button>
        <button
          className="btn btn-muted px-4 py-2 rounded"
          onClick={() => {
            setParticipants([])
            setResults(null)
          }}
        >
          Reset
        </button>
      </div>

      {results && (
        <div className="mt-6 animate-fade-up" style={{ animationDelay: '120ms' }}>
          <DrawResults results={results} />
        </div>
      )}
    </div>
  )
}
