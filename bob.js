//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const normalResponse = 'Whatever.'
const shoutResponse = 'Whoa, chill out!'
const questionResponse = 'Sure.'
const shoutQuestionResponse = 'Calm down, I know what I\'m doing!'
const silentResponse = 'Fine. Be that way!'

const includesCharacters = (message) => /\S/.test(message)

const includesWords = (message) => /[A-z]/.test(message)

const isAllOneCase = (message) => message.toUpperCase() === message

const isUppercaseWords = (message) => includesWords(message) && isAllOneCase(message)

const isStatement = (message) => !/\?\s*$/.test(message)


export const hey = (message) => {
  if (!isUppercaseWords(message) && includesCharacters(message) && isStatement(message)) {
    return normalResponse
  }
  if (!isUppercaseWords(message) && !isStatement(message)) {
    return questionResponse
  }
  if (isUppercaseWords(message) && !isStatement(message)) {
    return shoutQuestionResponse
  }
  if (isUppercaseWords(message) && isStatement(message)) {
    return shoutResponse
  }
  if (!includesCharacters(message)) {
    return silentResponse
  }
};
