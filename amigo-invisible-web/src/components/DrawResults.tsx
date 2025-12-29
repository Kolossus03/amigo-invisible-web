import React, { useState } from 'react'
import { resultsToCsv, downloadCsv } from '../utils/export'

type Props = {
  results: Record<string, string>
}

export default function DrawResults({ results }: Props) {
  const [message, setMessage] = useState<string | null>(null)

  const handleDownload = () => {
    const csv = resultsToCsv(results)
    downloadCsv('amigo-invisible.csv', csv)
    setMessage('CSV descargado')
    setTimeout(() => setMessage(null), 2000)
  }

  const handleCopy = async () => {
    try {
      const csv = resultsToCsv(results)
      await navigator.clipboard.writeText(csv)
      setMessage('Copiado al portapapeles')
      setTimeout(() => setMessage(null), 2000)
    } catch (e) {
      setMessage('Error al copiar')
      setTimeout(() => setMessage(null), 2000)
    }
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-2">Los emparejamientos son:</h2>
        <div className="flex gap-2">
          <button className="btn btn-primary px-3 py-1 rounded" onClick={handleDownload}>
            Descargar CSV
          </button>
          <button className="btn btn-muted px-3 py-1 rounded" onClick={handleCopy}>
            Copiar CSV
          </button>
        </div>
      </div>

      <ul className="space-y-1 mt-2">
        {Object.entries(results).map(([p, a], i) => (
          <li
            key={p}
            className="flex justify-between bg-gray-50 p-2 rounded animate-fade-up"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span>{p}</span>
            <span className="font-medium">{a}</span>
          </li>
        ))}
      </ul>

      {message && <div className="mt-3 text-sm text-gray-600 toast">{message}</div>}
    </div>
  )
}
