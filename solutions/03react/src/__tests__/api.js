import { mapObjectToArray, loadRates } from '../api';

it('data from api should be json', () => {
  return loadRates().then(returnData => {
    expect(() => {
      JSON.parse(JSON.stringify(returnData));
    }).not.toThrow();
  });
});

describe('mapObjectToArray', () => {
  it('mapObjectToArray should return array', () => {
    const testObject = { AUD: 1.5, SEK: 1.6 };
    const result = mapObjectToArray(testObject);
    expect(Array.isArray(result)).toBeTruthy();
  });

  it('mapObjectToArray should throw an error', () => {
    const testObject = 'hello';
    expect(() => {
      mapObjectToArray(testObject);
    }).toThrowError('Not an object');
  });
});