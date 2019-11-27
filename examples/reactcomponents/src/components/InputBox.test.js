import { shallow } from 'enzyme';
import React from 'react';
import InputBox from './InputBox';

test('Rendering an input box', () => {
  const inputBox = shallow(<InputBox />);

  inputBox.find('input').simulate('change', { target: { value: 'Jonas' } });

  expect(inputBox.find('h1').text()).toContain('Hello');
  expect(inputBox.find('input')).toHaveLength(1);
  expect(inputBox.state('inputValue')).toMatch('Jonas');
});

test('Basic snapshot', () => {
  const inputBox = shallow(<InputBox />);

  expect(inputBox).toMatchSnapshot();
});