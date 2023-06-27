const capitalize = require('./capitalize');

test('capitalize should capitalize the first character of a string', () => {
  const result = capitalize('hello');
  expect(result).toBe('Hello');
});

test('capitalize should throw an error for non-string input', () => {
  expect(() => capitalize(123)).toThrow('Input must be a non-empty string');
});

test('capitalize should throw an error for empty string input', () => {
  expect(() => capitalize('')).toThrow('Input must be a non-empty string');
});
