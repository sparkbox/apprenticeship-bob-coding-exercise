/*
 * Core JavaScript
 * 1. Control flow
 * 2. Imperative logic
 * 3. Point-free: https://github.com/hemanth/functional-programming-jargon#point-free-style
 */
const isAsking = message => message.endsWith('?')
const isYelling = message => message === message.toUpperCase() && message !== message.toLowerCase()
const isSilent = message => message === ''

const bob = message =>
  isAsking(message) && !isYelling(message) ? "Sure."
: isYelling(message) && !isAsking(message) ? "Whoa, chill out!"
: isAsking(message) && isYelling(message)  ? "Calm down, I know what I'm doing!"
: isSilent(message)                        ? "Fine. Be that way!"
: "Whatever."

export const hey = m => bob(m.trim())
