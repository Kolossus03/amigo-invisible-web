import React, { useState } from 'react'

type Props = {
  participants: string[]
  setParticipants: (p: string[]) => void
}

export default function ParticipantList({ participants, setParticipants }: Props) {
  const [name, setName] = useState('')

  const add = () => {
    const trimmed = name.trim()
    if (!trimmed) return
    if (participants.includes(trimmed)) {
      alert('Esa persona ya está añadida, diferencia el nombre')
      return
    }
    setParticipants([...participants, trimmed])
    setName('')
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1 transition focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Añade una persona"
          onKeyDown={(e) => e.key === 'Enter' && add()}
        />
        <button className="btn btn-green px-4 py-2 rounded" onClick={add}>
          Añadir
        </button>
      </div>

      <ul className="mt-3 space-y-1">
        {participants.map((p, i) => (
          <li key={p} className="flex justify-between items-center animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
            <span>{p}</span>
            <button
              className="text-red-500 hover:underline transition"
              onClick={() => setParticipants(participants.filter((x) => x !== p))}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
