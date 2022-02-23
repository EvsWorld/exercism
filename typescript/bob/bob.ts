import * as R from "ramda";

const isSilence = (m: string) => {
  // const r = /[\t\n\r]+/.test(m) || m === "";
  const r = /^\s*$/.test(m) || m === "";
  console.log("isSilence = ", r);
  return r;
};
const startsWithWhitespace = (m: string) => {
  // const r = /[\t\n\r]+/.test(m) || m === "";
  const r = /^\s*$/.test(m);
  console.log("starts with whitespace = ", r);
  return r;
};
const isQuestionMarkOnEnd = (m: string) => {
  const firstChars = [...m].filter((char) => /^[a-z0-9?!]/.test(char));
  const r = firstChars.join("").slice(-1) === "?";
  console.log("isQuestionMarkOnEnd :>> ", r);
  return r;
};
const isTherePunctuation = (m: string) => {
  const firstChars = [...m].filter((char) => /^[a-z0-9?!]/.test(char));
  const lastChar = firstChars.join("").slice(-1);
  console.log("firstChars :>> ", lastChar);
  const r = ["!", "?", "."].includes(lastChar);
  // console.log("isTherePunctuation :>> ", r);
  return r;
};

const firstChars = (m: string) =>
  isTherePunctuation(m) ? m.slice(0, m.length - 1) : m;

const isAllCaps = (m: string) => {
  // console.log("firstChars :>> ", firstChars(m));
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
export function heyA(message: string): string {
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
    case isSilence(message) || startsWithWhitespace(message):
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

export const hey = (input: string): string => {
  const answers: string[] = [
    "Whatever.",
    "Sure.",
    "Whoa, chill out!",
    "Calm down, I know what I'm doing!",
  ];
  const speech = input.trim();
  if (speech == "") return "Fine. Be that way!";

  const isQuestion = speech.endsWith("?") ? 1 : 0;
  const isShout =
    /[A-Z]+/.test(speech) && speech == speech.toUpperCase() ? 2 : 0;
  return answers[isQuestion + isShout];
};
// console.log("Okay if like my  spacebar  quite a bit?   ".trim().endsWith("?"));

export function heyC(speech: string): string {
  if (hearsBoring(speech)) {
    return "Fine. Be that way!";
  }
  if (hearsFreaky(speech)) {
    return "Whoa, chill out!";
  }
  if (hearsInquisitive(speech)) {
    return "Sure.";
  }
  return "Whatever.";
}
const hearsBoring = (speech: string): boolean => {
  return speech.length === 0 || /^\s*$/.test(speech);
};
const hearsFreaky = (speech: string): boolean => {
  return /[A-Z]/.test(speech) && speech === speech.toUpperCase();
};
const hearsInquisitive = (speech: string): boolean => {
  return speech.endsWith("?");
};

export const heyB = (input: string) => {
  const isQuestion = R.endsWith("?");
  const isAllUpper = (s: string) => s === s.toUpperCase();
  const containsLetters = (s: string) => !!s.match(/[a-z]/i);
  const isWhitespaceOrEmpty = R.pipe(R.trim, R.isEmpty);
  const isShouting = R.both(containsLetters, isAllUpper);
  return R.cond([
    [isShouting, R.always("Whoa, chill out!")],
    [isQuestion, R.always("Sure.")],
    [isWhitespaceOrEmpty, R.always("Fine. Be that way!")],
    [R.T, R.always("Whatever.")],
  ])(input);
};
