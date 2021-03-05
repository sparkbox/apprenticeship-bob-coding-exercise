import {
  always,
  allPass,
  complement,
  cond,
  converge,
  endsWith,
  equals,
  identity,
  isEmpty,
  pipe,
  tap,
  toLower,
  toUpper,
  trim,
  T,
} from 'ramda'

/*
 * Ramda.js
 * 1. Control flow / Composition / Point-free: https://github.com/hemanth/functional-programming-jargon#point-free-style
 * 2. Referential transparency / Reasoning: https://github.com/hemanth/functional-programming-jargon#referential-transparency
 * 3. Thinking functionally
 * 4. Stratified Design / Naming
 * 5. Pipelines / Debugging
 */

// Helpers
const log = message => tap(value => console.log(message, value))

/*
 * Bob
 */

const isUnicase = converge(equals, [toUpper, toLower])
const isBicameral = complement(isUnicase)
const isUppercase = converge(equals, [identity, toUpper])

const isAsking = endsWith('?')
const isNotAsking = complement(isAsking)
const isYelling = allPass([isBicameral, isUppercase])
const isNotYelling = complement(isYelling)
const isSilent = isEmpty

const isJustYelling = allPass([isYelling, isNotAsking])
const isAskingImpolitely = allPass([isAsking, isYelling])
const isAskingPolitely = allPass([isAsking, isNotYelling])

const respond = cond([
  [isAskingPolitely, always('Sure.')],
  [isAskingImpolitely, always("Calm down, I know what I'm doing!")],
  [isJustYelling, always('Whoa, chill out!')],
  [isSilent, always('Fine. Be that way!')],
  [T, always('Whatever.')],
])

export const hey = pipe(
  trim,
  respond,
)
