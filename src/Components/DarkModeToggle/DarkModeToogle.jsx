import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const DarkModeToggleSwitch = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
  />
  );
};

export default DarkModeToggleSwitch;
