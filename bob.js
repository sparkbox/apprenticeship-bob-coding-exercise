class MessageParser {
  constructor(message){
    this.message = message
  }

  isQuiet = () => !this.message;

  isQuestion = () => this.message.endsWith("?");

  isUpperCase = () =>
    this.message.match(/[A-Za-z]/) &&
    this.message === this.message.toUpperCase();

  isYelling = () =>
    !this.isQuiet() && this.isUpperCase();

  isYellingQuestion = () =>
    this.isYelling(this.message) && this.isQuestion(this.message);

  isDefault = () => true;
}

const responses = [
  ['isQuiet', "Fine. Be that way!"],
  ['isYellingQuestion', "Calm down, I know what I'm doing!"],
  ['isQuestion', "Sure."],
  ['isYelling', "Whoa, chill out!"],
  ['isDefault', "Whatever."],
];

function Person(responses, parser){
  this.responses = responses;
  this.parser = parser
  this.respond = function(message){
    const parsedMessage = new this.parser(message)
    return responses.find(([ condition ]) => parsedMessage[condition]())[1];
  }
}

const bob = new Person(responses, MessageParser);

export const hey = (message) => bob.respond(message.trim());