export function hey(message: string): string {
  // throw new Error('Remove this statement and implement this function')
  // regex test input and then choose response from dictionary

  const responseDict = {
    question: "Sure",
    yell: "Whoa, chill out!",
    yellQuestion: "Calm down, I know what i'm doing!",
    sayNothing: "Fine. Be that way!",
    default: "Whatever.",
  };
  let response: string;

  switch (true) {
    case /[!]$/.test(message):
      console.log("question");
      response = responseDict.question;
      break;
    case /^[^a-z]*$/.test(message):
      response = responseDict.yell;
      break;
    case /(.*(!)$)|([^a-z])+(\?)*$/.test(message):
      response = responseDict.yellQuestion;
      break;
    default:
      response = responseDict.default;
      break;
  }
}
