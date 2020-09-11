import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StateOfPageContext = React.createContext();

export const StateOfPageContextProvider = ({ children }) => {
  const [pageStatus, setPageStatus] = useState('entered');

  const runEntryOrLeaveAnimation = (entryAnimation, leaveAnimation) => {
    if (pageStatus === 'entered') {
      entryAnimation();
    } else {
      leaveAnimation();
    }
  };

  return (
    <StateOfPageContext.Provider
      value={{ pageStatus, setPageStatus, runEntryOrLeaveAnimation }}
    >
      {children}
    </StateOfPageContext.Provider>
  );
};

StateOfPageContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default StateOfPageContext;
