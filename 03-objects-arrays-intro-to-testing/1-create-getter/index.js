/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  return function (obj) {
    const fields = path.split('.');
    let child = obj;

    for (let i = 0; i < fields.length; i++) {
      child = child[fields[i]];
      if (typeof child === 'undefined') {
        return child;
      }
    }
    return (typeof child === 'object') ? undefined : child;
  };

}
