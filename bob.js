//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmedMessage = message.trim();

  // order does matter:
  // check for question first, then question yelling
  // then nonstatement, then yelling
  // then default
  // need to handle nonletters better, maybe with regex?
  if (trimmedMessage.substr(-1) === '?') {
    return isYelling(trimmedMessage) ?
      replyToQuestionYelling() :
      replyToQuestion();
  } else if (!trimmedMessage.length) {
    return replyToNonStatement();
  } else if (isYelling(trimmedMessage)) {
    return replyToYellingStatement();

  } else {
    return defaultReply();
  }
};

const isYelling = (message) => {
  // check for letters first?
  return (isUpperCase(message) && isNotAllLowerCase(message));
}

const isUpperCase = (message) => {
  return message.toUpperCase() === message;
}

const isNotAllLowerCase = (message) => {
  return message.toLowerCase() !== message;
}

const replyToQuestionYelling = () => {
  return "Calm down, I know what I'm doing!";
}

const replyToQuestion = () => {
  return "Sure.";
}

const replyToYellingStatement = () => {
  return "Whoa, chill out!";
}

const replyToNonStatement = () => {
  return "Fine. Be that way!";
}

const defaultReply = () => {
  return "Whatever.";
}

// question: ends with a question mark --> "Sure." DONE
// yelling: all caps --> "Whoa, chill out!" DONE
// question yelling: all caps, ends with a question mark --> "Calm down, I know what I'm doing!" DONE
// not saying anything: non-word, non-number --> "Fine. Be that way!" DONE
// anything else: "Whatever."

// Question: What is the best way to handle all of those conditions?

// Bob is a lackadaisical teenager. In conversation, his responses are very limited.

// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.
