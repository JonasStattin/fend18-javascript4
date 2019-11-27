import { render, shallow, mount } from 'enzyme';
import React from 'react';
import ModalWindow from './ModalWindow';
import InputBox from './InputBox';

test('Do not render the input box with shallow', () => {
  const modalWindow = shallow(
    <ModalWindow>
      <InputBox />
    </ModalWindow>
  );

  expect(modalWindow.find('input')).toHaveLength(0);

  modalWindow.find('button').simulate('click');

  modalWindow.setProps({ closeModal: () => { modalWindow.unmount(); } });

  modalWindow.find('button').simulate('click');
});

test('Do render the input box with mount', () => {
  const modalWindow = mount(
    <ModalWindow>
      <InputBox />
    </ModalWindow>
  );

  expect(modalWindow.find('input')).toHaveLength(1);

  modalWindow.find('button').simulate('click');

  modalWindow.setProps({ closeModal: () => { modalWindow.unmount(); } });

  modalWindow.find('button').simulate('click');
});

test('Something something life cycles', () => {
  const modalWindow = render(
    <ModalWindow>
      <InputBox />
    </ModalWindow>
  );

  expect(modalWindow.find('input')).toHaveLength(1);
});
