import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import { mapObjectToArray, loadRates } from '../api';

it('should have a button', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('populate list with rates', () => {
  return loadRates().then(returnData => {
    const wrapper = shallow(<App />);
    const rates = mapObjectToArray(returnData.rates);
    wrapper.setState({ rates })
    const list = wrapper.find('.list-reset');
    expect(list.children()).toHaveLength(31);
  });
});

it('update state on search change', () => {
  const wrapper = shallow(<App />);
  wrapper.find('input').simulate('change', {
    target: { name: 'search', value: 'AUD' }
  });
  expect(wrapper.state().search).toEqual('AUD');
});

it('update list on search change', () => {
  return loadRates().then(returnData => {
    const wrapper = shallow(<App />);
    const rates = mapObjectToArray(returnData.rates);
    wrapper.setState({ rates })

    wrapper.find('input').simulate('change', {
      target: { name: 'search', value: 'AUD' }
    });

    const list = wrapper.find('.list-reset');
    expect(list.children()).toHaveLength(1);
  });
});
