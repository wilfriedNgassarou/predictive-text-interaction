import { WordEntry } from "../types";

export const getPredictions = (word: string, dictionary: { text: string; frequency: number }[]) => {
  if (word.length === 0) return []

  return dictionary.filter(({ text }) => text.toLowerCase().startsWith(word.toLowerCase())).sort(sortByTextLength).slice(0, 3)
}

const sortByTextLength = (a: WordEntry, b: WordEntry) => a.text.length - b.text.length