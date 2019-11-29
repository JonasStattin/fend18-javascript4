import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

test('should render <App /> without user', () => {
  const wrapper = shallow(<App user="" />);
  expect(wrapper.find('.user').exists()).toBeFalsy();
});

test('should render <App /> with user', () => {
  const user = 'Steffe';
  const wrapper = shallow(<App user={user} />);
  expect(wrapper.find('.user').text()).toBe(user);
});

test('call the internal method loginSuccessful', () => {
  const user = 'Steffe';
  const wrapper = mount(<App user='' />);
  wrapper.instance().loginSuccessful(user);
  expect(wrapper.state().user).toBe(user);
});

test('call the internal method logout', () => {
  const user = 'Steffe';
  const wrapper = mount(<App user={user} />);
  expect(wrapper.state().user).toBe(user);
  wrapper.instance().logout();
  expect(wrapper.state().user).toBeFalsy();
});