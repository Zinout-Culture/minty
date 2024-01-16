class Functions {
  sanitizeCase = (input: string): string => {
    if (!input) return ''

    const texts: string[] = input.trim().split(' ')
    const aux = texts.map((text: string) => {
      const lowercaseSentence = text.toLowerCase()
      const firstLetterUppercase = lowercaseSentence.charAt(0).toUpperCase()
      const restOfSentence = lowercaseSentence.slice(1)

      return firstLetterUppercase + restOfSentence
    })
    return aux.join(' ')
  }
}

export default new Functions()
