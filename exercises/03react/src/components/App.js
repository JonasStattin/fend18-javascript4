import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadRates, mapObjectToArray } from '../api';
import Button from './Button';

export default class App extends Component {
  state = {
    rates: [],
    error: '',
    search: ''
  };

  onChange = ({ target }) => this.setState({ [target.name] : target.value });

  updateRates = () => {
    loadRates(this.props.base)
      .then(({ rates, base }) => {
        this.setState({ rates: mapObjectToArray(rates), base })
      })
      .catch(e => this.setState({ error: e.message }));
  };

  filterList = rate => {
    if(rate.value && this.state.search) {
      return rate.key.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
    }
    return rate;
  }

  renderList = rates => rates
    .filter(this.filterList)
    .map(rate => (
      <li className="py-2 px-4 mb-4 border rounded shadow" key={rate.key}>
        {rate.value} {rate.key}
      </li>
   ));

  render() {
    return (
      <div className="flex flex-col justify-center items-center w-1/2 mx-auto font-mono text-grey-darker mt-6">
        <div className="fixed pin-t pin-r m-4 font-mono uppercase text-sm flex flex-col items-center">
          <Button onClick={this.updateRates} />
        </div>
        <h1 className="text-pink-dark mb-4">{this.props.base} Rates</h1>
        <p className="error">{this.state.error}</p>
        <input 
          type="text" 
          value={this.state.search} 
          onChange={this.onChange} 
          name="search" 
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker" 
        />
        <ul className="list-reset">
          {this.renderList(this.state.rates)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  base: PropTypes.string
};

/* 
 * If no props are sent down from `index.js` the component
 * uses these props, default is EUR and todays rate
 */
App.defaultProps = {
  base: 'EUR'
};