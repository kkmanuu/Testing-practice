const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add a positive number and zero correctly', () => {
      expect(calculator.add(4, 0)).toBe(4);
    });

    test('should add two negative numbers correctly', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract()', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should subtract a positive number and zero correctly', () => {
      expect(calculator.subtract(4, 0)).toBe(4);
    });

    test('should subtract two negative numbers correctly', () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });
  });

  describe('divide()', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(8, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide a negative number by a positive number correctly', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should multiply a positive number and zero correctly', () => {
      expect(calculator.multiply(4, 0)).toBe(0);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
