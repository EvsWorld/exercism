const isSilence = (m: string) => {
  // const r = /[\t\n\r]+/.test(m) || m === "";
  const r = /^\s*$/.test(m) || m === "";
  console.log("isSilence = ", r);
  return r;
};
const isQuestionMarkOnEnd = (m: string) => {
  const r = m.slice(-1) === "?";
  console.log("isQuestionMarkOnEnd :>> ", r);
  return r;
};
const isTherePunctuation = (m: string) => {
  const r = ["!", "?", "."].includes(m.slice(-1));
  // console.log("isTherePunctuation :>> ", r);
  return r;
};

const firstChars = (m: string) =>
  isTherePunctuation(m) ? m.slice(0, m.length - 1) : m;

const isAllCaps = (m: string) => {
  console.log("firstChars :>> ", firstChars(m));
  const firstCharsArray = Array.from(firstChars(m));
  const allUppercaseLetters = firstCharsArray.every((char) => {
    // console.log("char :>> ", char);
    // console.log(
    //   "char.toUpperCase() === char :>> ",
    //   char.toUpperCase() === char
    // );
    return char.toUpperCase() === char;
  });
  const allNumbers = firstCharsArray.every((char) => {
    return !isNaN(+char) || [" ", ",", "."].includes(char);
  });
  return allUppercaseLetters && !allNumbers;
};
export function hey(message: string): string {
  // throw new Error('Remove this statement and implement this function')
  // regex test input and then choose response from dictionary

  let response: string;

  switch (true) {
    // case /(.*(!)$)|([^a-z])+(\?)*$/.test(message):
    case isAllCaps(message) && isQuestionMarkOnEnd(message):
      console.log("YELL QUESTION?");
      response = "Calm down, I know what I'm doing!";
      break;
    // case /[?]$/.test(message):
    case !isAllCaps(message) && isQuestionMarkOnEnd(message):
      console.log("question?");
      response = "Sure.";
      break;
    case isAllCaps(message) && !isQuestionMarkOnEnd(message):
      console.log("YELL");
      response = "Whoa, chill out!";
      break;
    case isSilence(message):
      // !isAllCaps(message) &&
      // !isQuestionMarkOnEnd(message):
      console.log("silence");
      response = "Fine. Be that way!";
      break;
    default:
      console.log("default");
      response = "Whatever.";
      break;
  }
  return response;
}

// const responseDict = {
//   question: "Sure.",
//   yell: "Whoa, chill out!",
//   yellQuestion: "Calm down, I know what I'm doing!",
//   sayNothing: "Fine. Be that way!",
//   default: "Whatever.",
// };
// const m = "Does this cryogenic chamber make me look fat?";
// console.log(isAllCaps("Does this cryogenic chamber make me look fat?"));
// console.log(m.slice(m.length));
