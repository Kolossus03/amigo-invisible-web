import { describe, it, expect } from 'vitest'
import { resultsToCsv } from './export'

describe('resultsToCsv', () => {
  it('produces valid CSV with header', () => {
    const data = { Alice: 'Bob', Carol: 'Dave' }
    const csv = resultsToCsv(data)
    const lines = csv.split('\n')
    expect(lines[0]).toBe('"giver","recipient"')
    expect(lines).toContain('"Alice","Bob"')
    expect(lines).toContain('"Carol","Dave"')
  })
})
