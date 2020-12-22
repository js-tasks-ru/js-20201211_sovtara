/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (typeof arr === 'undefined') {
    return [];
  }

  return arr.reduce((result, element) =>
    result.includes(element) ? result : [...result, element]
  , []);

}
