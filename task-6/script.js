function oddNumbers(min, max) {
  if (min < 0 || max < 0) {
    return "invalid parameter values";
  }

  let oddNumbers = "";

  if (min % 2 === 0) {
    min = min + 1;
  }

  if (max % 2 === 0) {
    max = max - 1;
  }

  for (let number = min; number <= max; number = number + 2) {
    if (number > min) {
      oddNumbers += ",";
    }

    //oddNumbers = oddNumbers + number + ",";
    oddNumbers += number;
  }

  return oddNumbers;
}

console.log(oddNumbers(0, 4));

console.log(oddNumbers(10, 33));

console.log(oddNumbers(9, 12));

function charCount(word, character) {
  if (character.length !== 1) {
    return "invalid parameter";
  }

  let count = 0;

  word = word.toLowerCase();
  character = character.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    const currentCharacter = word[i];

    if (currentCharacter === character) {
      count++;
    }
  }

  return count;
}

console.log(charCount("hello", "l"));

console.log(charCount("mama", "m"));

console.log(charCount("Resümee", "e"));
