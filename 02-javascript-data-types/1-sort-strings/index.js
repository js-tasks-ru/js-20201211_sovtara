/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const locales = ['ru', 'en'];

  return [...arr].sort( (element1, element2) => {
    if (param === 'asc') {
      return element1.localeCompare(element2, locales, {caseFirst: 'upper'});
    }
    if (param === 'desc') {
      return -element1.localeCompare(element2, locales, {caseFirst: 'lower'});
    }
  });

}
