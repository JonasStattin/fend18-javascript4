import React from 'react';
import PropTypes from 'prop-types';
import AvatarSelector from './AvatarSelector';

const PersonaSwitcher = ({ currentPersona, changePersona }) => (
  <div className="fixed pin-t pin-r">
    <AvatarSelector currentPersona={currentPersona} />
    <div className="inline-block relative p-4">
      <select
        value={currentPersona}
        onChange={changePersona}
        className="block appearance-none bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow"
      >
        <option value="Zac">Zac</option>
        <option value="Esmeralda">Esmeralda</option>
        <option value="Morgana">Morgana</option>
      </select>
      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-6 text-grey-darker">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

PersonaSwitcher.propTypes = {
  currentPersona: PropTypes.string.isRequired,
  changePersona: PropTypes.func.isRequired
};

export default PersonaSwitcher;
