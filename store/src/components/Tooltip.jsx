// src/components/Tooltip.jsx
import React from 'react';

const Tooltip = ({ visible, children }) => {
  if (!visible) return null;

  // Tooltip styles
  const tooltipStyles = {
    position: 'absolute',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    zIndex: 1000,
    whiteSpace: 'nowrap',
    transition: 'opacity 0.2s',
  };

  return (
    <div style={tooltipStyles}>
      {children}
    </div>
  );
};

export default Tooltip;
