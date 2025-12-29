import { describe, it, expect } from 'vitest'
import { drawSecretSanta } from './draw'

describe('drawSecretSanta', () => {
  it('assigns everyone and no one is assigned to themselves', () => {
    const participants = ['Alice', 'Bob', 'Carol', 'Dave']
    const result = drawSecretSanta(participants)

    // no self assignments
    for (const p of participants) {
      expect(result[p]).toBeDefined()
      expect(result[p]).not.toBe(p)
    }

    // recipients are unique
    const recipients = Object.values(result)
    const unique = new Set(recipients)
    expect(unique.size).toBe(participants.length)
  })
})