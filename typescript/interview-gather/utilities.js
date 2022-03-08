// Make array of numbers from start to end inclusive
function characterRange(startChar, endChar) {
  return String.fromCharCode(
    ...range(
      endChar.charCodeAt(0) - startChar.charCodeAt(0),
      startChar.charCodeAt(0)
    )
  );
}
