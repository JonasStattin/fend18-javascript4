import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

test('should get the user from localStorage', () => {
  const user = 'Steffe';
  localStorage.setItem('user', user);
  const getUser = localStorageUtils.getUserFromLocalStorage();
  expect(getUser).toBe(user);
});

test('should get empty user from localStorage', () => {
  const getUser = localStorageUtils.getUserFromLocalStorage();
  expect(getUser).toBeFalsy();
});

