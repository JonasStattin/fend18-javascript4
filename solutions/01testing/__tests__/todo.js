beforeEach(() => {
  jest.resetModules();
});

test('returns all todos', () => {
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(3);
});

test('removes all todos', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
});

test('adds a new todo', () => {
  const todoList = require('../src/todoList');
  todoList.addTodo('Harass HR for Early Bird Conference Tickets');
  expect(todoList.getAllTodos()).toHaveLength(4);
});

test('appends a new todo', () => {
  const todoList = require('../src/todoList');
  const todo = 'Harass HR for Early Bird Conference Tickets'
  todoList.addTodo(todo);
  expect(todoList.getAllTodos().pop()).toEqual(todo);
})

test('removes a todo', () => {
  const todoList = require('../src/todoList');
  todoList.removeTodo(1);
  expect(todoList.getAllTodos()).toHaveLength(2);
});

test('updates a todo', () => {
  const todoList = require('../src/todoList');
  const oldTodoValue = 'Check out that new hip JS framwork';
  const newTodoValue = 'I am updated!';
  expect(todoList.getAllTodos()[0]).toEqual(oldTodoValue);
  todoList.editTodo(newTodoValue, 0);
  expect(todoList.getAllTodos()[0]).toEqual(newTodoValue);
});

test('throws error when trying to remove an undefined item', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
  expect(() => {
    todoList.removeTodo(2);
  }).toThrowError('That item does not exists!');
});

test('throws error when no items left', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
  expect(() => {
    todoList.removeTodo(0);
  }).toThrow();
});

test('throws error when trying to edit an undefined todo', () => {
  const todoList = require('../src/todoList');
  todoList.removeAllTodos();
  expect(todoList.getAllTodos()).toHaveLength(0);
  expect(() => {
    todoList.editTodo('New content', 3);
  }).toThrow();
});
