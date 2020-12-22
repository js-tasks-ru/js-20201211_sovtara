/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (typeof arr === 'undefined') {
    return [];
  }
  return uniqViaSet(arr);
}

function uniqViaSet(arr) {
  let uniq = new Set();

  arr.forEach(value => uniq.add(value));

  return Array.from(uniq.values());
}

function uniqViaReduce(arr) {
  return arr.reduce((result, element) =>
    result.includes(element) ? result : [...result, element]
  , []);
}
