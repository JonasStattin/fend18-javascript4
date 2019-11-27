beforeEach(() => {
  jest.resetModules();
});

test('returns all todos', () => {
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(3);
});
