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

export const hey = (message) => {
  if (!includesCharacters(message)) {
    return silentResponse
  }
};
