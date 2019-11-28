import { functionWithBranches } from './coverage';

test('my branching statement', () => {
  expect(functionWithBranches()).toBe(false);
  expect(functionWithBranches('a')).toBe(true);
  expect(functionWithBranches('b')).toBe(false);
});