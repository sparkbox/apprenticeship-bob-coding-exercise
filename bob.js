const isQuiet = (message) => !message;

const isQuestion = (message) => message.endsWith("?");

const isUpperCase = (message) =>
  message.match(/[A-Za-z]/) &&
  message === message.toUpperCase();

const isYelling = (message) =>
  !isQuiet(message) && isUpperCase(message);

const isYellingQuestion = (message) =>
  isYelling(message) && isQuestion(message);

const isDefault = () => true;

function Response(condition, responseMessage) {
  return {
    isMatch(message) {
      return condition(message);
    },
    responseMessage
  }
}

const responses = [
  new Response(isQuiet, "Fine. Be that way!"),
  new Response(isYellingQuestion, "Calm down, I know what I'm doing!"),
  new Response(isQuestion, "Sure."),
  new Response(isYelling, "Whoa, chill out!"),
  new Response(isDefault, "Whatever.")
];

function Person(responses){
  this.responses = responses;
  this.respond = function(message){
    return responses.find(response => response.isMatch(message)).responseMessage;
  }
}

const bob = new Person(responses);

export const hey = (message) => bob.respond(message.trim());