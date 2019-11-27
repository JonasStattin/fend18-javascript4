import { mount, shallow } from 'enzyme';
import React from 'react';
import DropDown from './DropDown';

test('Rendering an dropdown box', () => {
  const dropDown = shallow(<DropDown items={['Diska', 'Städa', 'Sova']} />);

  expect(dropDown.find('li')).toHaveLength(0);

  dropDown.find('button').simulate('click');

  expect(dropDown.find('li')).toHaveLength(3);
});

test('force the toggle function', () => {
  const dropDown = mount(<DropDown items={['Diska', 'Städa', 'Sova']} />);
  
  expect(dropDown.find('li')).toHaveLength(0);
  
  const instance = dropDown.instance();
  instance.onToggleExpand();

  dropDown.update();

  expect(dropDown.find('li')).toHaveLength(3);
});

test('mock the toggle function', () => {
  const dropDown = shallow(<DropDown items={['Diska', 'Städa', 'Sova']} />);
  expect(dropDown.find('li')).toHaveLength(0);

  dropDown.instance().onToggleExpand = jest.fn();

  dropDown.instance().forceUpdate();
  dropDown.update();

  dropDown.find('button').simulate('click');

  expect(dropDown.instance().onToggleExpand).toBeCalled();
  expect(dropDown.find('li')).toHaveLength(0);
});
