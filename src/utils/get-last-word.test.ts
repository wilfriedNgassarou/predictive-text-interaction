import { test, expect } from 'vitest'
import { getLastWord } from './get-last-word'

test('expect get last word to work correctly', () => {
  expect(getLastWord('bonjour divan')).toBe('divan')

  expect(getLastWord('je suis')).toBe('suis')

  expect(getLastWord('une nouvelle voit')).toBe('voit')

  expect(getLastWord('')).toBe('')
})