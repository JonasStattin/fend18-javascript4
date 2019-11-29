import * as api from '../api';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

test('should get user from localStorage', () => {
  const persona = 'Steffe';
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
});
