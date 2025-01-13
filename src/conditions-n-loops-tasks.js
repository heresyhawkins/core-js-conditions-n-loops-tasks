/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.w ikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b) {
    if (a + b > c && c > 0) {
      return true;
    }
  }
  if (b === c) {
    if (b + c > a && a > 0) {
      return true;
    }
  }
  if (a === c) {
    if (a + c > b && b > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  let result = '';

  if (number >= 10) {
    while (number >= 10) {
      result += 'X';
      number -= 10;
    }
  }

  if (number >= 9) {
    result += 'IX';
    number -= 9;
  }

  if (number >= 5) {
    result += 'V';
    number -= 5;
  }

  if (number === 4) {
    result += 'IV';
    number -= 4;
  }

  while (number >= 1) {
    result += 'I';
    number -= 1;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const stringNumber = numberStr;
  let counterNumber = '';
  for (let i = 0; i < stringNumber.length; i += 1) {
    switch (stringNumber[i]) {
      case '0':
        counterNumber += 'zero';
        break;
      case '1':
        counterNumber += 'one';
        break;
      case '2':
        counterNumber += 'two';
        break;
      case '3':
        counterNumber += 'three';
        break;
      case '4':
        counterNumber += 'four';
        break;
      case '5':
        counterNumber += 'five';
        break;
      case '6':
        counterNumber += 'six';
        break;
      case '7':
        counterNumber += 'seven';
        break;
      case '8':
        counterNumber += 'eight';
        break;
      case '9':
        counterNumber += 'nine';
        break;
      case '-':
        counterNumber += 'minus';
        break;
      case '.':
      case ',':
        counterNumber += 'point';
        break;
      default:
        counterNumber += '';
    }
    if (i !== stringNumber.length - 1) {
      counterNumber += ' ';
    }
  }
  return counterNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      return i;
    }
  }
  return '-1';
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const stringNumber = String(num);
  for (let i = 0; i < stringNumber.length; i += 1) {
    if (digit === +stringNumber[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function toSummarize(start, end) {
    let sum = 0;
    for (let i = start; i < end; i += 1) {
      sum += arr[i];
    }
    return sum;
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (toSummarize(0, i) === toSummarize(i + 1, arr.length)) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  let [x, y, steps] = [0, 0, size - 1];

  for (let i = 0; i < size; i += 1) {
    result[i] = [];
  }

  for (let i = 1; i <= size * size; i += 1) {
    result[y][x] = i;

    if (x === size - steps - 1 && y === steps) {
      steps -= 1;
    }

    if ((x >= y && x < steps) || (y === size - steps - 1 && x === y - 1)) {
      x += 1;
    } else if (y <= x && y < steps) {
      y += 1;
    } else if (x <= y && x >= size - steps) {
      x -= 1;
    } else if (y >= x && y >= size - steps) {
      y -= 1;
    }
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const newMatrix = matrix;
  for (let i = 0; i < row / 2; i += 1) {
    for (let j = i; j < col - i - 1; j += 1) {
      const temp = newMatrix[i][j];
      newMatrix[i][j] = newMatrix[col - j - 1][i];
      newMatrix[col - j - 1][i] = newMatrix[col - i - 1][col - j - 1];
      newMatrix[col - i - 1][col - j - 1] = newMatrix[j][col - i - 1];
      newMatrix[j][col - i - 1] = temp;
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;

  if (arr.length > 1) {
    const middleNumber = sortArr[0];
    let lessArr = [];
    let moreArr = [];

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < middleNumber) {
        lessArr[lessArr.length] = arr[i];
      } else {
        moreArr[moreArr.length] = arr[i];
      }
    }

    lessArr = sortByAsc(lessArr);
    moreArr = sortByAsc(moreArr);
    const tempArr = [...lessArr, middleNumber, ...moreArr];

    for (let i = 0; i < sortArr.length; i += 1) {
      sortArr[i] = tempArr[i];
    }
  }

  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let shuffleStr = str;
  let countIterations = iterations;

  for (let index = 0; index < countIterations; index += 1) {
    let evenStr = '';
    let oddStr = '';
    for (let i = 0; i < shuffleStr.length; i += 1) {
      if (i % 2 === 0) {
        evenStr += shuffleStr.charAt(i);
      } else {
        oddStr += shuffleStr.charAt(i);
      }
    }
    shuffleStr = evenStr + oddStr;

    if (shuffleStr === str) {
      countIterations %= index + 1;
      return shuffleChar(str, countIterations);
    }
  }

  return shuffleStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function toSortDigit(num) {
    const arrDigit = [];
    for (let i = 0; i < String(num).length; i += 1) {
      arrDigit[i] = String(num)[i];
    }
    return arrDigit.sort((a, b) => b - a).join('');
  }

  const max = toSortDigit(number);

  for (let i = number + 1; i <= max; i += 1) {
    if (max === toSortDigit(i)) {
      return i;
    }
  }

  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
