import { getLastWord } from "./get-last-word"

export const getNewInputValue = (word: string, inputValue: string) => {
  const lastInputWord = getLastWord(inputValue)

  const gap = lastInputWord.length - word.length

  const sliceEnd = gap < 0 ? lastInputWord.length : word.length

  return inputValue.slice(0, -1 * sliceEnd) + word + ' '
}