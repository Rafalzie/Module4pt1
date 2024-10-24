// src/GreenButton.tsx
import React, { useState } from 'react';

interface GreenButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const GreenButton: React.FC<GreenButtonProps> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonStyles: React.CSSProperties = {
    backgroundColor: isHovered ? 'darkgreen' : 'green',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.2s',
    transform: isHovered ? 'scale(.05)' : isActive ? 'scale(0.95)' : 'scale(1)',
    marginLeft: 'auto', // Push button to the right
    marginRight: '0',   // Ensure no margin on the right
  };

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'flex-end', // Align items to the right
    justifyContent: 'center', // Center vertically
    height: '100vh', // Full viewport height
    textAlign: 'center', // Center text
  };

  return (
    <div style={containerStyles}>
      
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={buttonStyles}
      >
        {children}
      </button>
    </div>
  );
};

export default GreenButton;
