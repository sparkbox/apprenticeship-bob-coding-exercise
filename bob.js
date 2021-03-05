//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
   //sure if asked a question such as "How are you?" isQuestion()
   //TODO: Trim Whitespace
   const basicQuestionStatement = message.search(/[?]$/gm);
   if (basicQuestionStatement >= 0) {
      return "Sure.";
   }
   // console.log(message, basicQuestionStatement)

   //answers 'woah,chill out!' if you yell at him in CAPS isAllCaps()
   const yellingStatement = message.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g)

   if(yellingStatement != null){
     return 'Whoa, chill out!'
   }
   console.log(message, yellingStatement);

   // answer 'Calm down, I know what I'm doing! if you yell a question at him questionYelled()

   // says 'fine. be that way' if you address him without actually saying anything saidNothing()

   // answers 'whatever' to anything else
};
