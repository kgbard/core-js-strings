// Returns the length of the given string
function getStringLength(value) {
  if (!value) return 0;
  return value.length;
}

// Returns true if the value is a string
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

// Returns the result of concatenation of two strings
function concatenateStrings(value1, value2) {
  return `${value1}${value2}`;
}

// Returns the first character of the given string
function getFirstChar(value) {
  return value ? value[0] : '';
}

// Removes leading and trailing whitespace characters
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

// Removes only leading whitespace characters
function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

// Removes only trailing whitespace characters
function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

// Returns a string that is repeated the specified number of times
function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

// Remove the first occurrence of a substring
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

// Remove the last occurrence of a substring
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

// Calculate the sum of character codes
function sumOfCodes(str) {
  if (!str) return 0;
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

// Checks if a string starts with a specific substring
function startsWith(str, substr) {
  return str.startsWith(substr);
}

// Checks if a string ends with a specific substring
function endsWith(str, substr) {
  return str.endsWith(substr);
}

// Returns a time string in the "mm:ss" format
function formatTime(minutes, seconds) {
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

// Returns a string in reverse order
function reverseString(str) {
  return [...str].reverse().join('');
}

// Returns a string with characters in alphabetical order
function orderAlphabetically(str) {
  return [...str].sort().join('');
}

// Checks if a string contains a specified substring
function containsSubstring(str, substring) {
  return str.includes(substring);
}

// Returns the number of vowels in the string
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return [...str].filter((char) => vowels.includes(char)).length;
}

// Returns true if the string is a palindrome
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === [...cleanStr].reverse().join('');
}

// Find the longest word in the sentence
function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

// Returns the string where each word is reversed
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
}

// Inverts the case of each character
function invertCase(str) {
  return [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

// Returns the result of string template
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// Extracts a name from template string
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

// Extracts e-mails from single string
function extractEmails(str) {
  return str.split(';');
}

// Remove the first and last angle brackets from tag string
function unbracketTag(str) {
  return str.slice(1, -1);
}

// Encode string with ROT13 cipher
function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    const base = code <= 90 ? 65 : 97;
    return String.fromCharCode(base + ((code - base + 13) % 26));
  });
}

// Returns playing card id
function getCardId(value) {
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suits = ['♣', '♦', '♥', '♠'];

  const rank = value.slice(0, -1);
  const suit = value.slice(-1);

  return ranks.indexOf(rank) + suits.indexOf(suit) * 13;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
