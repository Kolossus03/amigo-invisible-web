export function drawSecretSanta(participants: string[]): Record<string, string> {
  if (participants.length < 2) throw new Error('Se necesitan al menos 2 participantes')

  // simple derangement via shuffling loop
  const recipients = [...participants]

  function shuffle<T>(arr: T[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  let attempts = 0
  while (true) {
    attempts++
    shuffle(recipients)
    let ok = true
    for (let i = 0; i < participants.length; i++) {
      if (participants[i] === recipients[i]) {
        ok = false
        break
      }
    }
    if (ok) break
    if (attempts > 1000) throw new Error('No se pudo generar un sorteo sin auto asignaciones')
  }

  const result: Record<string, string> = {}
  for (let i = 0; i < participants.length; i++) {
    result[participants[i]] = recipients[i]
  }
  return result
}
