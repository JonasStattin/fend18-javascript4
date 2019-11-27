import React from 'react';
import renderer from 'react-test-renderer';
import InputBox from './InputBox';

test('Rendering an input box', () => {
  const component = renderer.create(<InputBox />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
