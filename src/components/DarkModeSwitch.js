import React from 'react';
import Switch from '@material-ui/core/Switch'
import PropTypes from 'prop-types';


export default function DarkModeSwitch({darkMode, setDarkMode}) {
  const handleChange = (e) => {
    setDarkMode(e.target.checked);
  }

  return (
    <Switch
      checked={darkMode}
      onChange={handleChange}
    />
  );
}

DarkModeSwitch.propTypes = {
  darkMode: PropTypes.bool,
}
