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

const responses = [
  [isQuiet, "Fine. Be that way!"],
  [isYellingQuestion, "Calm down, I know what I'm doing!"],
  [isQuestion, "Sure."],
  [isYelling, "Whoa, chill out!"],
  [isDefault, "Whatever."]
];

const selectResponse = (message) => responses.find(([condition]) => condition(message))[1];

export const hey = (message) => selectResponse(message.trim());
