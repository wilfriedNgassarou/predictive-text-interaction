export const getLastWord = (text: string) => {
  const array = text.split(' ')

  if (array.length) return array[array.length - 1]

  return ''
}