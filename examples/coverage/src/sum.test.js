import { sum } from './sum';

test('should add two numbers together', () => {
  expect(sum(5,5)).toBe(10);
});

// Uncomment to test all branches
test('should throw if not a number', () => {
  expect(() => {
    sum(null, "falafel");
  }).toThrowError("Only numbers please");
});
