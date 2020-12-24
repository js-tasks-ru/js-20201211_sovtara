/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof size === 'undefined') {
    return string;
  }

  let currentSymbol;
  let sizeCounter = 0;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (currentSymbol === string[i]) {
      sizeCounter++;
    } else {
      sizeCounter = 1;
      currentSymbol = string[i];
    }
    if (sizeCounter <= size) {
      result = result + currentSymbol;
    }
  }

  return result;

}
