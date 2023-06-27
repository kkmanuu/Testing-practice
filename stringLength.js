function stringLength(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  if (string.length === 0) {
    throw new Error('String must not be empty');
  }

  if (string.length > 10) {
    throw new Error('String must not exceed 10 characters');
  }

  return string.length;
}

module.exports = stringLength;
