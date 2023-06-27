const stringLength = require('./stringLength');

// Test for the original functionality
test('Returns the correct length of a non-empty string', () => {
  expect(stringLength('Hello')).toBe(5);
});

// Test for empty string
test('Throws an error for an empty string', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must not be empty');
});

// Test for string longer than 10 characters
test('Throws an error for a string longer than 10 characters', () => {
  expect(() => {
    stringLength('This is a very long string');
  }).toThrow('String must not exceed 10 characters');
});

// Test for input that is not a string
test('Throws an error for input that is not a string', () => {
  expect(() => {
    stringLength(42);
  }).toThrow('Input must be a string');
});
