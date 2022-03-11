// Make array of numbers from start to end inclusive
function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function characterRange(startChar, endChar) {
  return String.fromCharCode(
    ...range(
      endChar.charCodeAt(0) - startChar.charCodeAt(0),
      startChar.charCodeAt(0)
    )
  );
}

characterRange(1, 14);
