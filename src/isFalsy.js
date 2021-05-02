/**
 * Checks if condition is falsy
 *
 * @param { Any } condition - Checks any condition for falsy
 * @returns { Boolean }
 */

const isFalsy = (condition = true) => {
  if (
    !condition ||
    condition === null ||
    typeof condition === 'undefined'
  ) {
    return true
  }

  return false
}

module.exports = isFalsy
