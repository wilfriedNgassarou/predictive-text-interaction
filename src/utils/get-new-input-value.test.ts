import { expect, test } from 'vitest'

import { getNewInputValue } from "./get-new-input-value";

test('Expect get new input value to work correctly', () => {
  const newValue1 = getNewInputValue('divan', 'je suis divan')
  
  expect(newValue1).toEqual('je suis divan ')

  const newValue2 = getNewInputValue('voiture', 'ma voitu')
  
  expect(newValue2).toEqual('ma voiture ')

  const newValue3 = getNewInputValue('fort', 'je suis un gars fort')
  
  expect(newValue3).toEqual('je suis un gars fort ')
})

