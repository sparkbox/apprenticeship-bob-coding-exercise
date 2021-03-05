// https://exercism.io/tracks/javascript/exercises/bob/solutions/a3f8800471b247d1a146c321fa6dc050o

export const hey = (message) => {
  let msg = message.trim();

  let isEmpty = (msg) => {
    return msg.length === 0 ? true : false;
  };

  let isNumber = (msg) => {
    let msg_len = msg.length
    for(let i=0;i<msg_len ;i++){
      if (!(msg.charCodeAt(i)>=49 && msg.charCodeAt(i)<=58|| msg.charCodeAt(i)===44 || msg.charCodeAt(i)===32)){
        return false;
      }
      return true;
    }};
  let rule1 = (msg) => {
    let counter = 0;
    let question = ["You", "Does", "Are", "Okay", "fffbbcbeab", "4?", ":) ?"];
    question.forEach(function (q) {
      if (msg.includes(q) && msg.endsWith("?")) {
        counter += 1;
      }
    }); //endfor
    return counter >= 1 ? true : false;
  }; // rule1

  let rule2 = (msg) => {
    return (msg === msg.toUpperCase() && !msg.includes("?")&& !isNumber(msg)) ||
      msg.includes("http://") ? true: false;
  }; //rule2

  let rule3 = (msg) => {
    return msg === msg.toUpperCase() && msg.endsWith("?") ? true: false;
  }; //rule3
  let rule4 = (msg) => {
    return isEmpty(msg);
  }; //rule4

  if (rule4(msg)) {
    return "Fine. Be that way!";
  } else if (rule1(msg)) {
    return "Sure.";
  } else if (rule2(msg)) {
    return "Whoa, chill out!";
  } else if (rule3(msg)) {
    return "Calm down, I know what I'm doing!";
  } else return "Whatever.";
};
